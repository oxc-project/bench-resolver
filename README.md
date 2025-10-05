# Bench Resolver

- [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
- [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 29x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    5.53x faster than oxc-resolver async Promise.all
    14.73x faster than oxc-resolver async
    22.69x faster than enhanced-resolve Promise.all
    29.48x faster than enhanced-resolve async
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
