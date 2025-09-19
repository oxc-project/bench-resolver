# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Summary

`oxc-resolver` is 23~28x faster than webpack's `enhanced-resolve`.

## Result

```
 BENCH  Summary

  oxc-resolver sync - src/index.bench.mjs > bench
    1.07x faster than oxc-resolver sync Promise.all
    7.19x faster than oxc-resolver async Promise.all
    7.34x faster than oxc-resolver async
    23.41x faster than enhanced-resolve Promise.all
    23.91x faster than enhanced-resolve async
```

## Run

```bash
pnpm install
pnpm run bench
```
