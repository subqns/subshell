#!/usr/bin/env -S deno run -A --import-map=./import_map.json --no-check
/*
import * as prod from './src/endpoints/production';
import * as dev from './src/endpoints/development';
import * as testing from './src/endpoints/testing.ts';
*/

// import { prodChains, prodRelayKusama, prodRelayPolkadot } from 'https://unpkg.com/@polkadot/apps-config/endpoints';
// import { testChains, testRelayRococo, testRelayWestend } from 'https://unpkg.com/@polkadot/apps-config/endpoints';
// import { prodChains, prodRelayKusama, prodRelayPolkadot } from 'https://unpkg.com/@polkadot/apps-config';
//import { testChains, testRelayRococo, testRelayWestend } from 'https://unpkg.com/@polkadot/apps-config';
// import { prodChains, prodRelayKusama, prodRelayPolkadot } from './src/endpoints';
// import { prodChains, prodRelayKusama, prodRelayPolkadot } from './src/endpoints';
// import * as ep from 'https://unpkg.com/@polkadot/apps-config/endpoints';
// import * as ep from './src/endpoints';
import {
prodChains,
prodRelayKusama,
prodRelayPolkadot,
testChains,
testRelayRococo,
testRelayWestend,
} from "@polkadot/apps-config/endpoints";

/*
prodChains,
prodRelayKusama,
prodRelayPolkadot,
testChains,
testRelayRococo,
testRelayWestend,
*/
// console.log({})

//console.log(Object.keys(ep))
//console.log(YAML.stringify(JSON.parse(JSON.stringify(ep))))

// subsh run a.ts | grep -oE 'wss?://.*' | sort -u | jq -R | jq -s > ep.json
console.log({
prodChains,
prodRelayKusama,
prodRelayPolkadot,
testChains,
testRelayRococo,
testRelayWestend,
})
