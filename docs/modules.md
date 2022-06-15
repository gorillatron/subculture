[subculture](README.md) / Exports

# subculture

## Table of contents

### Type aliases

- [BlockEventsPair](modules.md#blockeventspair)

### Functions

- [at](modules.md#at)
- [isValid](modules.md#isvalid)
- [lastFour](modules.md#lastfour)
- [latest](modules.md#latest)
- [mapEventsToBlock](modules.md#mapeventstoblock)
- [mapToExtrinsics](modules.md#maptoextrinsics)
- [numberOf](modules.md#numberof)
- [shorten](modules.md#shorten)
- [slice](modules.md#slice)
- [tail](modules.md#tail)

## Type aliases

### BlockEventsPair

Ƭ **BlockEventsPair**: [`SignedBlock`, `Vec`<`EventRecord`\>]

Block and Events Tuple

#### Defined in

[block.ts:114](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L114)

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

[block.ts:27](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L27)

___

### isValid

▸ **isValid**(`address`, `ss58Format?`): `boolean`

Validate a substrate address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `AddressOrPair` | AddressOrPair |
| `ss58Format?` | `number` | number |

#### Returns

`boolean`

boolean

#### Defined in

[address.ts:14](https://github.com/yornaath/subculture/blob/d47c177/src/address.ts#L14)

___

### lastFour

▸ **lastFour**(`address`): `string`

Last four characters of an address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `AddressOrPair` | AddressOrPair |

#### Returns

`string`

string

#### Defined in

[address.ts:58](https://github.com/yornaath/subculture/blob/d47c177/src/address.ts#L58)

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

[block.ts:16](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L16)

___

### mapEventsToBlock

▸ **mapEventsToBlock**(`api`, `block`): `Promise`<[`BlockEventsPair`](modules.md#blockeventspair)\>

Fetch Events for a given block and return the pair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | ApiPromise |
| `block` | `SignedBlock` | SignedBlock |

#### Returns

`Promise`<[`BlockEventsPair`](modules.md#blockeventspair)\>

BlockEventsPair

#### Defined in

[block.ts:125](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L125)

___

### mapToExtrinsics

▸ **mapToExtrinsics**(`block`, `events`, `filter?`): `GenericExtrinsic`<`AnyTuple`\>[]

Get the extrinsics in a block mapped by its events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `SignedBlock` | SignedBlock |
| `events` | `Vec`<`EventRecord`\> | Vec<EventRecord> |
| `filter?` | `Object` | - |
| `filter.method?` | `string` | string |

#### Returns

`GenericExtrinsic`<`AnyTuple`\>[]

GenericExtrinsic<AnyTuple>[]

#### Defined in

[event.ts:15](https://github.com/yornaath/subculture/blob/d47c177/src/event.ts#L15)

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

[block.ts:43](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L43)

___

### shorten

▸ **shorten**(`address`, `sliceStart?`, `sliceEnd?`, `seperator`): `string`

Shorten an address. Usefull in small UI lists etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `AddressOrPair` | `undefined` | AddressOrPair |
| `sliceStart` | `number` | `6` | number |
| `sliceEnd` | `number` | `4` | number |
| `seperator` | ``"..."`` | `undefined` | string |

#### Returns

`string`

string

#### Defined in

[address.ts:38](https://github.com/yornaath/subculture/blob/d47c177/src/address.ts#L38)

___

### slice

▸ **slice**(`api`, `from`, `to`, `concurrency?`): `Promise`<`SignedBlock`[]\>

Get a slice of blocks

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` | ApiPromise |
| `from` | `number` | `undefined` | number - start block |
| `to` | `number` | `undefined` | number - end block |
| `concurrency` | `number` | `8` | - |

#### Returns

`Promise`<`SignedBlock`[]\>

Awaitable<SignedBlock[]>

#### Defined in

[block.ts:89](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L89)

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

[block.ts:61](https://github.com/yornaath/subculture/blob/d47c177/src/block.ts#L61)
