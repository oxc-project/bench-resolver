# Bench Resolver

- [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
- [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 24x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.12x faster than oxc-resolver sync Promise.all
    4.91x faster than oxc-resolver async Promise.all
    9.05x faster than oxc-resolver async
    23.51x faster than enhanced-resolve async
    23.57x faster than enhanced-resolve Promise.all
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
