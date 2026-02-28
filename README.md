# Bench Resolver

- [enhanced-resolve](https://npmx.dev/package/enhanced-resolve)
- [oxc-resolver](https://npmx.dev/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 26x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.11x faster than oxc-resolver sync Promise.all
    4.35x faster than oxc-resolver async Promise.all
    12.99x faster than oxc-resolver async
    22.40x faster than enhanced-resolve Promise.all
    25.74x faster than enhanced-resolve async
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
