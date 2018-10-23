# Treeshake example

## Build react component library and link it in the app

```bash
yarn build:lib && lerna bootstrap
```

## Build test application that uses the library

```bash
yarn build:app
```

I have committed both the bundled library and the app build at `packages/test-lib/lib` and `packages/test-app/dist` respectively.  My question is, why is `TestD`, which uses `format` from `date-fns` removed in the app, yet `format` and its dependents are not removed?
