import { ApiPromise, WsProvider } from "@polkadot/api";

const PROVIDER = Deno.env.get("PROVIDER") ?? "wss://rpc.polkadot.io"
const TYPES = JSON.parse(Deno.env.get("TYPES") ?? "{}");

export const subshellBanner = `
 ____        _         _          _ _ 
/ ___| _   _| |__  ___| |__   ___| | |
*___ *| | | | '_ */ __| '_ * / _ * | |
 ___) | |_| | |_) *__ * | | |  __/ | |
|____/ *__,_|_.__/|___/_| |_|*___|_|_|
                                       
`.replaceAll('*', '\\');

export const subshellBannerRight = `
 ____        _         _          _ _    __          
/ ___| _   _| |__  ___| |__   ___| | |   * *         
*___ *| | | | '_ */ __| '_ * / _ * | |    * * 
 ___) | |_| | |_) *__ * | | |  __/ | |    / / _____ 
|____/ *__,_|_.__/|___/_| |_|*___|_|_|   /_/ |_____|       

`.replaceAll('*', '\\');
                                                    
export const subshellBannerLeft = `
 __            ____        _         _          _ _  
 * *          / ___| _   _| |__  ___| |__   ___| | | 
  * *         *___ *| | | | '_ */ __| '_ * / _ * | | 
  / / _____    ___) | |_| | |_) *__ * | | |  __/ | | 
 /_/ |_____|  |____/ *__,_|_.__/|___/_| |_|*___|_|_|       
                                                      
`.replaceAll('*', '\\');

export function showAsciiBanner() {
  const { columns } = Deno.consoleSize(); // --unstable
  if (columns > 54) {
    console.log(`%c${subshellBannerRight}`, "color: blue");
  } else if (columns >= 40 ) {
    console.log(`%c${subshellBanner}`, "color: blue");
  }
}

function progInfo() {
  /* print program info from package.json */

  const info = {
    "⚙️ v8 version ": Deno.version.v8,
    "🇹 TypeScript version ": Deno.version.typescript,
    "📗 Subshell tutorial ": 'https://doc.subshell.xyz',
    "❔ Issues ": 'https://github.com/btwiuse/subshell/issues',
    "⛓️ RPC Ppovider": PROVIDER,
    "🪄 Custom types": JSON.stringify(TYPES) != '{}' ? 'Yes' : 'None',
    "📖 Runtime api reference": 'https://substrate.rs',
  };

  Object.keys(info)
    .forEach((k) => {
      const prop = k;
      const value = info[k];
      console.log(`%c${prop} %c${value}`, "color: blue", "color: green");
    })
}


// console.log("%cHello %cWorld", "color: red", "color: blue")

showAsciiBanner()

progInfo()

console.log()

function info(msg: string = "") {
  console.log(`%c[INFO] %c${msg}`, 'color: yellow', "color: white")
}

info("api initializing...");

console.log()

const wsProvider = new WsProvider(
  PROVIDER,
);
const api = await ApiPromise.create({ provider: wsProvider, types: TYPES });

console.log()

info(`api has been injected to the global object. You can start exploring it in the repl. Here are some examples:`)
info()
info("> api.runtimeChain.toHuman()");
info(api.runtimeChain.toHuman());
info()
info("> api.consts.system.ss58Prefix.toHuman()");
info(api.consts.system.ss58Prefix.toHuman());
info()
info("> (await api.query.system.number()).toHumber()");
info((await api.query.system.number()).toNumber());
info()
info("> api.runtimeMetadata.version");
info(api.runtimeMetadata.version);

console.log()
