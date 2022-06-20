//#!/usr/bin/env -S deno run -A --import-map=./import_map.json --no-check

import * as hashing from "@polkadot/util-crypto";
import * as util from "@polkadot/util";
// import * as wc from "@polkadot/wasm-crypto";
// import * as ac from "@polkadot/apps-config";
import { ApiPromise, WsProvider } from "@polkadot/api";

// console.log(ac.packageInfo)

function getPrefix(addr: string) {
  return hashing.checkAddressChecksum(hashing.base58Decode(addr))[3];
}

console.log(
  `prefix for addr tj4oefCFG7DXxJUTspuKY3xJiVUfS4vK7podawriCUBxMeoSA`,
  getPrefix("tj4oefCFG7DXxJUTspuKY3xJiVUfS4vK7podawriCUBxMeoSA"),
);

console.log(
  `prefix for addr 65ADzWZUAKXQGZVhQ7ebqRdqEzMEftKytB8a7rknW82EASXB`,
  getPrefix("65ADzWZUAKXQGZVhQ7ebqRdqEzMEftKytB8a7rknW82EASXB"),
);

console.log(Deno.args);

// await wc.waitReady()
// console.log(wc.bip39Generate())

// Deno.exit(1);

// Construct
const wsProvider = new WsProvider("wss://rpc.polkadot.io");
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());

api.disconnect();
