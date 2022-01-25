import { generateKeyPair } from 'crypto';
import * as fs from 'fs/promises';
import * as path from 'path';
import type { ConfigurationFile } from '@zabo/types';

export function zcli(): string {
  return 'zcli';
}

export function generateSshKeyPair(): void {
  generateKeyPair(
    'ed25519',
    undefined,
    (err, publicKey, privateKey) => {
      // Handle errors and use the generated key pair.
    }
  );
}

export function generateConfigurationFile(configurationFile: ConfigurationFile): Promise<any> {
  const newFile = path.resolve(
    `${__dirname}/../../../../../example/zabo.json`
  );
  return fs.writeFile(
    newFile,
    JSON.stringify(
      {
        hello: 'Hey Theredwee Zabo!',
      },
      null,
      '\t'
    )
  );
}
