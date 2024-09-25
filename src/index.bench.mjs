import assert from "assert";
import fs from "fs";
import { bench, describe } from "vitest";
import enhancedResolve from 'enhanced-resolve';
import { ResolverFactory as OxcResolverFactory } from 'oxc-resolver';

const cwd = process.cwd();

const enhancedResolver = enhancedResolve.ResolverFactory.createResolver({
  fileSystem: new enhancedResolve.CachedInputFileSystem(fs, 4000),
});

const oxcResolver = new OxcResolverFactory({});

const data = [
  './src/index.bench.mjs',
  'oxc-resolver',
  'enhanced-resolve',
  "vitest/node"
]

// Check results are valid
for (let path of data) {
  assert(await enhancedResolveAsync(path), await oxcResolveAsync(path));
  assert(await enhancedResolveAsync(path), oxcResolveSync(path));
}

async function enhancedResolveAsync(path) {
  return new Promise(function(resolve) {
    enhancedResolver.resolve({}, cwd, path, {}, function (_err, res) {
      resolve(res)
    })
  })
}

async function oxcResolveAsync(path) {
  return oxcResolver.async(cwd, path).then((r) => r.path);
}

async function oxcResolveSync(path) {
  return oxcResolver.sync(cwd, path).path
}

const options = {
  time: 3000,
  warmupIterations: 1
};

describe("bench", () => {
  bench('enhanced-resolve', async function testEnhancedResolve() {
    for (let path of data) {
      await enhancedResolveAsync(path);
    }
  }, options);

  bench('oxc-resolver async', async function testOxcResolver() {
    for (let path of data) {
      await oxcResolveAsync(path);
    }
  }, options);

  bench('oxc-resolver sync', function testOxcResolver() {
    for (let path of data) {
      oxcResolveSync(path);
    }
  }, options);
});
