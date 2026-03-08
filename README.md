# Bench Resolver

- [enhanced-resolve](https://npmx.dev/package/enhanced-resolve)
- [oxc-resolver](https://npmx.dev/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 32x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    7.29x faster than oxc-resolver async Promise.all
    16.21x faster than oxc-resolver async
    23.81x faster than enhanced-resolve Promise.all
    31.95x faster than enhanced-resolve async
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
