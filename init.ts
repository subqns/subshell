import { ApiPromise, WsProvider } from "@polkadot/api";

const wsProvider = new WsProvider(Deno.env.get("PROVIDER")??"wss://rpc.polkadot.io");
const types = JSON.parse(Deno.env.get("TYPES")??"{}")
const api = await ApiPromise.create({ provider: wsProvider, types });

