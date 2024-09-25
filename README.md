# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)


## Run

```bash
pnpm install
pnpm test
```

## Result

### MacBook Pro M3 Max

```
BENCH  Summary

 oxc-resolver sync - src/index.bench.mjs > bench
   4.45x faster than oxc-resolver async Promise.all
   8.28x faster than oxc-resolver async loop
   26.88x faster than enhanced-resolve
```
