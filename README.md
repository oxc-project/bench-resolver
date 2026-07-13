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
    5.67x faster than oxc-resolver async Promise.all
    7.85x faster than enhanced-resolve async
    8.33x faster than enhanced-resolve Promise.all
    13.37x faster than oxc-resolver async
```

<!-- BENCHMARK_RESULTS_END -->

## Run

```bash
pnpm install
pnpm run bench
```

## ❤ Who's [Sponsoring Oxc](https://github.com/sponsors/Boshen)?

<p align="center">
  <a href="https://github.com/sponsors/Boshen">
    <img src="https://raw.githubusercontent.com/Boshen/sponsors/main/sponsors.svg" alt="Our sponsors" />
  </a>
</p>
