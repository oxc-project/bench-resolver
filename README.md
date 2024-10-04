# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Summary

`oxc-resolver` is 14x faster than webpack's `enhanced-resolve`.

## Result

### MacBook Pro M3 Max

```
 BENCH  Summary

  oxc-resolver sync - src/index.bench.mjs > bench
    1.08x faster than oxc-resolver sync Promise.all
    4.47x faster than oxc-resolver async Promise.all
    8.72x faster than oxc-resolver async
    14.42x faster than enhanced-resolve Promise.all
    14.73x faster than enhanced-resolve async
```

## Run

```bash
pnpm install
pnpm run bench
```
