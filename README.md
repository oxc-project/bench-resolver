# Bench Resolver

- [enhanced-resolve](https://npmx.dev/package/enhanced-resolve)
- [oxc-resolver](https://npmx.dev/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->

`oxc-resolver` is 17x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.08x faster than oxc-resolver sync Promise.all
    6.84x faster than oxc-resolver async Promise.all
    14.18x faster than enhanced-resolve Promise.all
    16.86x faster than oxc-resolver async
    17.49x faster than enhanced-resolve async
```

<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
