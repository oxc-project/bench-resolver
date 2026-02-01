# Bench Resolver

- [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
- [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 28x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    6.10x faster than oxc-resolver async Promise.all
    15.89x faster than oxc-resolver async
    23.95x faster than enhanced-resolve Promise.all
    28.47x faster than enhanced-resolve async
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
