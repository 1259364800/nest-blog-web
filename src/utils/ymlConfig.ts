import { readFileSync } from 'fs';
import { join } from 'path';
import { load } from 'js-yaml';

const env = process.env.NODE_ENV;
export const getYmlConfig = (key?: string) => {
  const ymlInfo = load(readFileSync(join(process.cwd(), `.config/.${env}.yml`), 'utf-8')) as Record<
    string,
    any
  >;
  if (key) {
    return ymlInfo[key];
  }
  return ymlInfo;
};
