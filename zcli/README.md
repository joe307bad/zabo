oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g zcli
$ zcli COMMAND
running command...
$ zcli (--version)
zcli/0.0.0 darwin-x64 node-v16.13.1
$ zcli --help [COMMAND]
USAGE
  $ zcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zcli help [COMMAND]`](#zcli-help-command)
* [`zcli plugins`](#zcli-plugins)
* [`zcli plugins:inspect PLUGIN...`](#zcli-pluginsinspect-plugin)
* [`zcli plugins:install PLUGIN...`](#zcli-pluginsinstall-plugin)
* [`zcli plugins:link PLUGIN`](#zcli-pluginslink-plugin)
* [`zcli plugins:uninstall PLUGIN...`](#zcli-pluginsuninstall-plugin)
* [`zcli plugins update`](#zcli-plugins-update)

## `zcli help [COMMAND]`

Display help for zcli.

```
USAGE
  $ zcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `zcli plugins`

List installed plugins.

```
USAGE
  $ zcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `zcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zcli plugins:inspect myplugin
```

## `zcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ zcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ zcli plugins add

EXAMPLES
  $ zcli plugins:install myplugin 

  $ zcli plugins:install https://github.com/someuser/someplugin

  $ zcli plugins:install someuser/someplugin
```

## `zcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ zcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ zcli plugins:link myplugin
```

## `zcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ zcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zcli plugins unlink
  $ zcli plugins remove
```

## `zcli plugins update`

Update installed plugins.

```
USAGE
  $ zcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
