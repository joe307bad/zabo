import {Command} from '@oclif/core'
import { zcli } from '@zabo/zcli';

export default class World extends Command {
  static description = 'Say hello world'

  static examples = [
    `$ oex hello world
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log(zcli());
  }
}
