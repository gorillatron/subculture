import { ApiPromise } from '@polkadot/api'
import { VoidFn } from '@polkadot/api/types'
import { SignedBlock } from '@polkadot/types/interfaces'
import limit from 'p-limit'
import { range } from 'lodash'
import { at } from 'block'

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
 * @param cb (block: SignedBlock) => Promise<void> - callback to invoke on new block
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
