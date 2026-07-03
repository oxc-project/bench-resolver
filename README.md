# Bench Resolver

- [enhanced-resolve](https://npmx.dev/package/enhanced-resolve)
- [oxc-resolver](https://npmx.dev/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->

`oxc-resolver` is 8x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.11x faster than oxc-resolver sync Promise.all
    6.55x faster than enhanced-resolve Promise.all
    6.89x faster than oxc-resolver async Promise.all
    8.12x faster than enhanced-resolve async
    18.59x faster than oxc-resolver async
```

<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
