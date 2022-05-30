[subculture](../README.md) / [Exports](../modules.md) / event

# Namespace: event

## Table of contents

### Functions

- [extrinsicsAtEvent](event.md#extrinsicsatevent)

## Functions

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

[event.ts:14](https://github.com/gorillatron/subculture/blob/63afaa3/src/event.ts#L14)
