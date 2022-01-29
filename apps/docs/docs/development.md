---
id: development
title: Development
sidebar_label: Development
slug: /development
---
# Development

## `zcli`: The Zabo command line tool

### Using `oclif` inside of an `nx` workspace 
[This article](https://dev.to/digikare/oclif-on-nx-monorepo-33bo) was very helpful and informative. The one thing it leaves out is achieving hard typings while using any `nx` libs inside your `oclif` application. I achieved this by altering the `oclif` app `tsconfig` to this:

```
{
  "extends": "../tsconfig.base.json",
  "files": [],
  "include": ["src/**/*"],
  "compilerOptions": {
    "strict": true
  }
}
```

:::note

Using `@zabo/zcli` in `/zcli` is enabled by linking. After building `/zcli`:
```
cd dist/libs/zcli && npm link
cd /zcli link @zabo/zcli
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

### Adding features
- The root `/zcli` folder is an `oclif` CLI application
- Any interaction between `/zcli` and the `nx` ecosystem happens through the `/libs/zcli`.
- To add features to `/zcli`, first add the business logic to `/libs/zcli` then build that library and it's dependencies:
  ```
  nx build zcli --with-deps  
  ```
- Now you have the updated code accessible in `/zcli`  through `@zabo/zcli`. '/zcli' should be a thin layer of CLI argument validation that defers any logic to `/libs/zcli';  

