# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Summary

`oxc-resolver` is 17x faster than webpack's `enhanced-resolve`.

## Result

```
 BENCH  Summary

  oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    5.04x faster than oxc-resolver async Promise.all
    9.46x faster than oxc-resolver async
    17.19x faster than enhanced-resolve Promise.all
    18.35x faster than enhanced-resolve async
```

## Run

```bash
pnpm install
pnpm run bench
```
