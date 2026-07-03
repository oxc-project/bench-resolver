# Bench Resolver

- [enhanced-resolve](https://npmx.dev/package/enhanced-resolve)
- [oxc-resolver](https://npmx.dev/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->

`oxc-resolver` is 7x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    6.44x faster than enhanced-resolve Promise.all
    6.45x faster than oxc-resolver async Promise.all
    6.99x faster than enhanced-resolve async
    16.97x faster than oxc-resolver async
```

<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
