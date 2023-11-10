import assert from "assert";
import fs from "fs";
import { Bench } from 'tinybench';
import enhancedResolve from 'enhanced-resolve';
import { ResolverFactory as OxcResolverFactory } from 'oxc-resolver';

let cwd = process.cwd();

let enhancedResolver = enhancedResolve.ResolverFactory.createResolver({
  	fileSystem: new enhancedResolve.CachedInputFileSystem(fs, 4000),
});

let oxcResolver = new OxcResolverFactory();

const data = [
  './index.mjs',
  'oxc-resolver',
  'enhanced-resolve',
  'tinybench',
]

// Check results are valid
for (let path of data) {
  assert(await enhancedResolveAsync(path), oxcResolver.sync(cwd, path).path)
}

async function enhancedResolveAsync(path) {
  return new Promise(function(resolve) {
    enhancedResolver.resolve({}, cwd, path, {}, function (_err, res) {
      resolve(res)
    })
  })
}

async function oxcResolveAsync(path) {
  return new Promise(function(resolve) {
    resolve(oxcResolver.sync(cwd, path).path)
  })
}

// Create and run benches
let bench = new Bench({ time: 10000 });
bench
  .add('enhanced-resolve', async function testEnhancedResolve() {
    for (let path of data) {
      await enhancedResolveAsync(path);
    }
  })
  .add('oxc-resolver', async function testOxcResolver() {
    for (let path of data) {
      await oxcResolveAsync(path);
    }
  })

await bench.warmup();
await bench.run();

let means = bench.tasks.map((task) => task.result.mean);
let minIndex = means.indexOf(Math.min(...means));
let min = means[minIndex];

let table = []
for (let task of bench.tasks) {
  table.push({
    name: task.name,
    mean: (task.result.mean).toFixed(4) + 'ms',
    compare: (task.result.mean / min).toFixed(2)
  })
}

console.log('Node', process.version);
console.table(table);
