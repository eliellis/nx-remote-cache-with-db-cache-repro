import chalk from 'chalk';
import { RemoteCache } from 'nx/src/tasks-runner/default-tasks-runner';

export class DummyRemoteCache implements RemoteCache {
  async retrieve(hash: string, cacheDirectory: string): Promise<boolean> {
    console.log(
      chalk`{bgYellow.bold.black Retrieving cache for ${hash} from ${cacheDirectory}}`
    );
    return false;
  }
  async store(hash: string, cacheDirectory: string): Promise<boolean> {
    console.log(
      chalk`{bgYellow.bold.black Storing cache for ${hash} in ${cacheDirectory}}`
    );
    return false;
  }
}
