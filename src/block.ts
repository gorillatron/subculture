import { ApiPromise } from '@polkadot/api'
import { VoidFn } from '@polkadot/api/types'
import { SignedBlock } from '@polkadot/types/interfaces'

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
