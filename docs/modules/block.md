[subculture](../README.md) / [Exports](../modules.md) / block

# Namespace: block

## Table of contents

### Functions

- [at](block.md#at)
- [latest](block.md#latest)
- [numberOf](block.md#numberof)
- [tail](block.md#tail)

## Functions

### at

▸ **at**(`api`, `nr`): `Promise`<``null`` \| `SignedBlock`\>

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

[block.ts:24](https://github.com/gorillatron/subculture/blob/dd93ae4/src/block.ts#L24)

___

### latest

▸ **latest**(`api`): `Promise`<`SignedBlock`\>

Get the latest block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | ApiPromise |

#### Returns

`Promise`<`SignedBlock`\>

SignedBlock

#### Defined in

[block.ts:13](https://github.com/gorillatron/subculture/blob/dd93ae4/src/block.ts#L13)

___

### numberOf

▸ **numberOf**(`block`): `number`

Get the block number of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `SignedBlock` | SignedBlock |

#### Returns

`number`

number

#### Defined in

[block.ts:40](https://github.com/gorillatron/subculture/blob/dd93ae4/src/block.ts#L40)

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

[block.ts:58](https://github.com/gorillatron/subculture/blob/dd93ae4/src/block.ts#L58)
