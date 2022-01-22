---
id: development
title: Development
sidebar_label: Development
slug: /development
---
# Development

## `zcli`: The Zabo command line tool

### Adding features
- The root `/zcli` folder is an `oclif` CLI application
- Any interaction between `/zcli` and the `nx` ecosystem happens through the `/libs/zcli`.
- To add features to `/zcli`, first add the business logic to `/libs/zcli` then build that library and it's dependencies:
  ```
  nx build zcli --with-deps  
  ```
- Now you have the updated code accessible in `/zcli`  through `@zabo/zcli`. '/zcli' should be a thin layer of CLI argument validation that defers any logic to `/libs/zcli';  

:::note

Using `@zabo/zcli` in `/zcli` is enabled by linking. After building `/zcli`:
```
cd dist/libs/zcli && npm link
cd /zcli link @zabo/zcli
```

:::
