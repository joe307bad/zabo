---
id: development
title: Development
sidebar_label: Development
slug: /development
---
# Development

## `zcli`: The Zabo command line tool

### Building + running

Build libs used in `zcli`:
```
nx build utils --with-deps
```

Build `zcli`
```
cd /zcli && yarn build
```

Run `zcli`
```
./bin/run hello:world
```

### Using `oclif` inside of an `nx` workspace 
[This article](https://dev.to/digikare/oclif-on-nx-monorepo-33bo) was very helpful and informative. There are a few things missing:

- **Hard typings**

  We want hard typings while using any `nx` libs inside your `oclif` application. I achieved this by altering the `oclif` app `tsconfig` to this:

  ```
  {
    "extends": "../tsconfig.base.json",
    "files": [],
    "include": ["src/**/*"],
    "compilerOptions": {
      "declaration": true,
      "importHelpers": true,
      "module": "commonjs",
      "outDir": "dist",
      "strict": true,
      "target": "es2019",
    }
  }
  ```
  Inheriting `../tsconfig.base.json` adds the appropriate `nx` path aliases.

- **Transform path aliases after `tsc`**

  Once your `oclif` app is compiled, the `nx` path aliases need to be transformed into relative paths. `tsc-alias` works perfectly for this; so our build command becomes:
  ```
  shx rm -rf dist && tsc -b && tsc-alias
  ```

- ** New `/zcli/package.json` values **
  - `"main": "dist/zcli/src/index.js"`,
  - `oclif` section: `"commands": "./dist/zcli/src/commands"`,
  
  These new values take into account the new nested nature of our `/zcli/dist` folder that now contains the `nx` libs.


:::note

Using `@zabo/utils` in `/zcli` is enabled by linking. After building `/zcli`:
```
cd dist/libs/utils && npm link
cd /zcli link @zabo/utils
```

:::

### What if I want multiple `oclif` apps in this project?
I'd assume it would be as easy as nesting them in a `cli` folder.
```
zabo/
├─ cli/
│  ├─ oclif_app_1
│  ├─ oclif_app_2
```
And as long as these apps and their respective `tsconfig`s inherit the root `nx` `tsconfig`, it should work. 

