import { Vec } from '@polkadot/types'
import { EventRecord, SignedBlock } from '@polkadot/types/interfaces'

/**
 *
 * Get the extrinsics in a block mapped by EventRecord.
 *
 * @param events Vec<EventRecord>
 * @param block SignedBlock
 * @param filter.method string
 * @returns
 */

export const extrinsicsAtEvent = (
  events: Vec<EventRecord>,
  block: SignedBlock,
  filter?: {
    method?: string
  },
) => {
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
