import assert from "assert";
import fs from "fs";
import { bench, describe } from "vitest";
import enhancedResolve from "enhanced-resolve";
import { ResolverFactory as OxcResolverFactory } from "oxc-resolver";

const cwd = process.cwd();

const enhancedResolver = enhancedResolve.ResolverFactory.createResolver({
  fileSystem: new enhancedResolve.CachedInputFileSystem(fs, 4000),
});

const oxcResolver = new OxcResolverFactory({});

const data = [
  "./src/index.bench.mjs",
  "oxc-resolver",
  "enhanced-resolve",
  "vitest/node",
];

// Check results are valid
for (let request of data) {
  assert(await enhancedResolveAsync(request), await oxcResolveAsync(request));
  assert(await enhancedResolveAsync(request), oxcResolveSync(request));
}

async function enhancedResolveAsync(request) {
  return new Promise(function (resolve) {
    enhancedResolver.resolve({}, cwd, request, {}, function (_err, res) {
      resolve(res);
    });
  });
}

async function oxcResolveAsync(request) {
  return oxcResolver.async(cwd, request).then((r) => r.path);
}

async function oxcResolveSync(request) {
  return Promise.resolve(oxcResolver.sync(cwd, request).path);
}

describe("bench", () => {
  bench("enhanced-resolve async", async () => {
    for (let path of data) {
      await enhancedResolveAsync(path);
    }
  });

  bench("oxc-resolver async", async () => {
    for (let path of data) {
      await oxcResolveAsync(path);
    }
  });

  bench("oxc-resolver sync", () => {
    for (let path of data) {
      oxcResolveSync(path);
    }
  });

  bench("enhanced-resolve Promise.all", async () => {
    return Promise.all(data.map(enhancedResolveAsync));
  });

  bench("oxc-resolver async Promise.all", async () => {
    return Promise.all(data.map(oxcResolveAsync));
  });

  bench("oxc-resolver sync Promise.all", async () => {
    return Promise.all(data.map(oxcResolveSync));
  });
});
