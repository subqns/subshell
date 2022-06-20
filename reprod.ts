#!/usr/bin/env -S subsh

import {
  prodChains,
  prodRelayKusama,
  prodRelayPolkadot,
  testChains,
  testRelayRococo,
  testRelayWestend,
} from "./ep.yaml";

interface chain {
  id: string;
  name: string;
  filename: string;
  providers: {
    id: string;
    name: string;
    group: string;
    // filename: string;
    url: string;
  };
}

var chains: chain[] = [];

function printPara(groupName, group, suffix) {
  let id = `${group.info}-${suffix}`;
  let filename = `${id}.md`;
  let name = group.text;

  console.log(`# ${groupName}`.toUpperCase());
  console.log(`- [${groupName}](${filename})`);

  chains.push({
    id,
    group: groupName,
    name,
    filename,
    providers: Object.entries(group.providers).map(([name, url], n) => {
      let pid = `${group.info}-${suffix}-${n + 1}`;
      let filename = `${pid}.md`;
      return {
        pid,
        name,
        // filename,
        url,
      };
    }),
  });

  let children = group.linked;

  for (let child of children) {
    let id = `${child.info}-para-${suffix}`.replaceAll(" ", "-");
    let filename = `${id}.md`;
    let name = child.text;
    if (child.isUnreachable) continue;
    console.log(`  - [${name}](${filename})`);
    Object.entries(child.providers).forEach(([provider, wss], n) => {
      //console.log(`    - [${provider}](${id}-${n+1}.md)`)
    });
    chains.push({
      id,
      name,
      group: groupName,
      filename,
      providers: Object.entries(child.providers).map(([name, url], n) => {
        let pid = `${id}-${n + 1}`;
        let filename = `${pid}.md`;
        return {
          pid,
          name,
          // filename,
          url,
        };
      }),
    });
  }
}

function printGroup(groupName, group, suffix) {
  let id = `${group.info}-${suffix}`;
  let name = group.text;

  console.log(`# ${groupName}`.toUpperCase());
  console.log(`- [${groupName}]()`);

  let children = group;

  for (let child of children) {
    let id = `${child.info}-${suffix}`.replaceAll(" ", "-");
    let filename = `${id}.md`;
    let name = child.text;
    if (child.isUnreachable) continue;
    console.log(`  - [${name}](${filename})`);
    Object.entries(child.providers).forEach(([provider, wss], n) => {
      //console.log(`    - [${provider}](${id}-${n+1}.md)`)
    });
    chains.push({
      id,
      name: child.text,
      group: groupName,
      filename,
      providers: Object.entries(child.providers).map(([name, url], n) => {
        let pid = `${id}-${n + 1}`;
        let filename = `${pid}.md`;
        return {
          pid,
          name,
          filename,
          url,
        };
      }),
    });
  }
}

printPara(`Polkadot & parachains`, prodRelayPolkadot, "dot");
printPara(`Kusama & parachains`, prodRelayKusama, "ksm");
printPara(`Test Westend & parachains`, testRelayWestend, "wnd");
printPara(`Test Rococo & parachains`, testRelayRococo, "rcc");
printGroup(`Live networks`, prodChains, "live");
printGroup(`Test networks`, testChains, "test");

fs.writeFileSync("chains.yaml", YAML.stringify(chains));
fs.writeFileSync("chains.json", JSON.stringify(chains, null, "  "));
