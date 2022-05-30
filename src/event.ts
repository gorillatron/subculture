import { GenericExtrinsic, Vec } from '@polkadot/types'
import { EventRecord, SignedBlock } from '@polkadot/types/interfaces'
import { AnyTuple } from '@polkadot/types/types'

/**
 *
 * Get the extrinsics in a block mapped by its events.
 *
 * @param events Vec<EventRecord>
 * @param block SignedBlock
 * @param filter.method string
 * @returns GenericExtrinsic<AnyTuple>[]
 */

export const mapToExtrinsics = (
  block: SignedBlock,
  events: Vec<EventRecord>,
  filter?: {
    method?: string
  },
): GenericExtrinsic<AnyTuple>[] => {
  return block.block.extrinsics.filter((ex, index) =>
    Boolean(
      events.find(
        event =>
          event.phase.isApplyExtrinsic &&
          event.phase.asApplyExtrinsic.eq(index) &&
          (!filter?.method || ex.method.method.toString() === filter.method),
      ),
    ),
  )
}
