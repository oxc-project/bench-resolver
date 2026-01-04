# Bench Resolver

- [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
- [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Benchmark Results

<!-- BENCHMARK_RESULTS_START -->
`oxc-resolver` is 26x faster than webpack's `enhanced-resolve`.

```
 BENCH  Summary

oxc-resolver sync - src/index.bench.mjs > bench
    1.08x faster than oxc-resolver sync Promise.all
    5.66x faster than oxc-resolver async Promise.all
    14.03x faster than oxc-resolver async
    22.39x faster than enhanced-resolve Promise.all
    26.34x faster than enhanced-resolve async
```
<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```
