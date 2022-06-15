import { ApiPromise } from '@polkadot/api'
import { Vec } from '@polkadot/types'
import { EventRecord, SignedBlock } from '@polkadot/types/interfaces'

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
 * Get the block number in bigint of a block.
 *
 * @param block SignedBlock
 * @returns bigint
 */

export const bigintOf = (block: SignedBlock) => {
  return BigInt(block.block.header.number.toString().replace(/,/g, ''))
}

/**
 *
 * Fetch Events for a given block and return the pair.
 *
 * @param api ApiPromise
 * @param block SignedBlock
 * @returns BlockEventsPair
 */

export const eventsAt = async (
  api: ApiPromise,
  block: SignedBlock,
): Promise<Vec<EventRecord>> => {
  return await (
    await api.at(block.block.header.hash.toHex())
  ).query.system.events<Vec<EventRecord>>()
}
