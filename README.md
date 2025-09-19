# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)

## Summary

`oxc-resolver` is 28x faster than webpack's `enhanced-resolve`.

## Result

```
 BENCH  Summary

  oxc-resolver sync - src/index.bench.mjs > bench
    1.09x faster than oxc-resolver sync Promise.all
    5.70x faster than oxc-resolver async Promise.all
    13.09x faster than oxc-resolver async
    22.90x faster than enhanced-resolve Promise.all
    27.41x faster than enhanced-resolve async
```

## Run

```bash
pnpm install
pnpm run bench
```
