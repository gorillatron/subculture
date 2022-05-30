[subculture](README.md) / Exports

# subculture

## Table of contents

### Namespaces

- [address](modules/address.md)

### Functions

- [blockAt](modules.md#blockat)
- [blockNumberOf](modules.md#blocknumberof)
- [extrinsicsAtEvent](modules.md#extrinsicsatevent)
- [latestBlock](modules.md#latestblock)
- [tail](modules.md#tail)

## Functions

### blockAt

▸ **blockAt**(`api`, `nr`): `Promise`<``null`` \| `SignedBlock`\>

Get the block at a certain blocknumber if it exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | ApiPromise |
| `nr` | `number` | number |

#### Returns

`Promise`<``null`` \| `SignedBlock`\>

SignedBlock | null

#### Defined in

[block.ts:24](https://github.com/gorillatron/subculture/blob/94be615/src/block.ts#L24)

___

### blockNumberOf

▸ **blockNumberOf**(`block`): `number`

Get the block number of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `SignedBlock` | SignedBlock |

#### Returns

`number`

number

#### Defined in

[block.ts:43](https://github.com/gorillatron/subculture/blob/94be615/src/block.ts#L43)

___

### extrinsicsAtEvent

▸ **extrinsicsAtEvent**(`events`, `block`, `filter?`): `GenericExtrinsic`<`AnyTuple`\>[]

Get the extrinsics in a block mapped by EventRecord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `Vec`<`EventRecord`\> | Vec<EventRecord> |
| `block` | `SignedBlock` | SignedBlock |
| `filter?` | `Object` | - |
| `filter.method?` | `string` | string |

#### Returns

`GenericExtrinsic`<`AnyTuple`\>[]

#### Defined in

[event.ts:14](https://github.com/gorillatron/subculture/blob/94be615/src/event.ts#L14)

___

### latestBlock

▸ **latestBlock**(`api`): `Promise`<`SignedBlock`\>

Get the latest block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | ApiPromise |

#### Returns

`Promise`<`SignedBlock`\>

SignedBlock

#### Defined in

[block.ts:13](https://github.com/gorillatron/subculture/blob/94be615/src/block.ts#L13)

___

### tail

▸ **tail**(`api`, `nr`, `cb`): `Promise`<`VoidFn`\>

Tails the chain for new blocks from a given blocknumber.
Awaits the callback for sequential processing.

**`nb`** If average callback processing time takes longer time than the average chain block time
the tailing will start to lagg behind the chain block production.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | ApiPromise |
| `nr` | `number` | number - block number to tail from |
| `cb` | (`block`: `SignedBlock`) => `Promise`<`void`\> | function - callback to invoke on new block |

#### Returns

`Promise`<`VoidFn`\>

function - unsubscribe

#### Defined in

[block.ts:61](https://github.com/gorillatron/subculture/blob/94be615/src/block.ts#L61)
