import { ApiPromise } from '@polkadot/api'
import { VoidFn } from '@polkadot/api/types'
import { Vec } from '@polkadot/types'
import { EventRecord, SignedBlock } from '@polkadot/types/interfaces'
import limit from 'p-limit'
import { range } from 'lodash'

/**
 *
 * Get the latest block
 *
 * @param api ApiPromise
 * @returns SignedBlock
 */

export const latest = async (api: ApiPromise) => api.rpc.chain.getBlock()

/**
 *
 * Get the block at a certain blocknumber if it exists.
 *
 * @param api ApiPromise
 * @param nr number
 * @returns SignedBlock | null
 */

export const at = async (api: ApiPromise, nr: number): Promise<SignedBlock | null> => {
  try {
    return await api.rpc.chain.getBlockHash(nr).then(hash => api.rpc.chain.getBlock(hash))
  } catch (error) {
    return null
  }
}

/**
 *
 * Get the block number of a block.
 *
 * @param block SignedBlock
 * @returns number
 */

export const numberOf = (block: SignedBlock) => {
  return parseInt(block.block.header.number.toString().replace(/,/g, ''))
}

/**
 *
 * Tails the chain for new blocks from a given blocknumber.
 * Awaits the callback for sequential processing.
 *
 * @nb If average callback processing time takes longer time than the average chain block time
 * the tailing will start to lagg behind the chain block production.
 *
 * @param api ApiPromise
 * @param nr number - block number to tail from
 * @param cb function - callback to invoke on new block
 * @returns function - unsubscribe
 */

export const tail = async (
  api: ApiPromise,
  nr: number,
  cb: (block: SignedBlock) => Promise<void>,
): Promise<VoidFn> => {
  const block = await at(api, nr)

  if (!block) {
    return await api.rpc.chain.subscribeFinalizedHeads(header => {
      return api.rpc.chain.getBlock(header.hash).then(async block => {
        return await cb(block)
      })
    })
  } else {
    await cb(block)
    return tail(api, nr + 1, cb)
  }
}

/**
 *
 * Get a slice of blocks
 *
 * @param api ApiPromise
 * @param from number - start block
 * @param to number - end block
 * @returns Awaitable<SignedBlock[]>
 */
export const slice = async (
  api: ApiPromise,
  from: number,
  to: number,
  concurrency = 8,
): Promise<SignedBlock[]> => {
  const pool = limit(concurrency)
  return (
    await Promise.all(
      range(from, to).map(nr =>
        pool(async () => {
          const block = await at(api, nr)
          if (block) {
            return block
          }
        }),
      ),
    )
  ).filter((block): block is SignedBlock => Boolean(block))
}

/**
 * Block and Events Tuple
 */

export type BlockEventsPair = [SignedBlock, Vec<EventRecord>]

/**
 *
 * Fetch Events for a given block and return the pair.
 *
 * @param api ApiPromise
 * @param block SignedBlock
 * @returns BlockEventsPair
 */

export const mapEventsToBlock = async (
  api: ApiPromise,
  block: SignedBlock,
): Promise<BlockEventsPair> => {
  const blockEvents = await (
    await api.at(block.block.header.hash.toHex())
  ).query.system.events<Vec<EventRecord>>()
  return [block, blockEvents]
}
