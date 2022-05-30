import { AddressOrPair } from "@polkadot/api/types";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex } from "@polkadot/util";

/**
 *
 * Validate a substrate address
 *
 * @param address AddressOrPair
 * @returns boolean
 */

export const isValid = (address: AddressOrPair) => {
  try {
    encodeAddress(
      isHex(address) ? hexToU8a(address) : decodeAddress(address.toString())
    );
    return true;
  } catch (error) {
    return false;
  }
};

/**
 *
 * Shorten an address. Usefull in small UI lists etc.
 *
 * @param address AddressOrPair
 * @param sliceStart number
 * @param sliceEnd number
 * @param seperator string
 * @returns string
 */

export const shortenAddress = (
  address: AddressOrPair,
  sliceStart: number = 6,
  sliceEnd: number = 4,
  seperator: "..."
) => {
  const addressString = address.toString();
  return `${addressString.slice(
    0,
    sliceStart
  )}${seperator}${addressString.slice(-sliceEnd)}`;
};

/**
 *
 * Last four characters of an address
 *
 * @param address AddressOrPair
 * @returns string
 */

export const lastFour = (address: AddressOrPair) =>
  address.toString().slice(-4);
