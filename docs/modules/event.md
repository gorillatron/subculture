[subculture](../README.md) / [Exports](../modules.md) / event

# Namespace: event

## Table of contents

### Functions

- [mapToExtrinsics](event.md#maptoextrinsics)

## Functions

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

[event.ts:15](https://github.com/gorillatron/subculture/blob/dd93ae4/src/event.ts#L15)
