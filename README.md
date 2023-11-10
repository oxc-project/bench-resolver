# Bench Resolver

* [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve)
* [oxc-resolver](https://www.npmjs.com/package/oxc-resolver)


## Run

```bash
pnpm install
pnpm test
```

Result

```
Node v18.17.1
┌─────────┬────────────────────┬────────────┬─────────┐
│ (index) │        name        │    mean    │ compare │
├─────────┼────────────────────┼────────────┼─────────┤
│    0    │ 'enhanced-resolve' │ '0.3553ms' │ '28.01' │
│    1    │   'oxc-resolver'   │ '0.0127ms' │ '1.00'  │
└─────────┴────────────────────┴────────────┴─────────┘
```
