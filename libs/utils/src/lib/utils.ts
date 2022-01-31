import { ConfigurationFile } from '@zabo/types';

export function utils(): string {
  return 'utils';
}

export function generateConfigurationFile(
  userConfig: ConfigurationFile
): Promise<string> {
  return Promise.resolve(JSON.stringify(userConfig));
}
