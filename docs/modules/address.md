[subculture](../README.md) / [Exports](../modules.md) / address

# Namespace: address

## Table of contents

### Functions

- [isValid](address.md#isvalid)
- [lastFour](address.md#lastfour)
- [shorten](address.md#shorten)

## Functions

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

address.ts:14

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

address.ts:58

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

address.ts:38
