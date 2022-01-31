import { Command } from '@oclif/core';
import { generateConfigurationFile } from '@zabo/utils';

export default class World extends Command {
  static description = 'Say hello world';

  static examples = [
    `$ oex hello world
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const userConfig = await generateConfigurationFile({
      privateKeyFile: 'privateKeyFile',
      serverLocalIpAddress: '123',
      zaboDir: '1345',
    });
    this.log(userConfig);
  }
}
