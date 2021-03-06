import { Injectable } from '@nestjs/common';
import * as chokidar from 'chokidar';

@Injectable()
export class AppService {

  onApplicationBootstrap(): any {
    const watcher = chokidar.watch(process.cwd() + '/example/watch-dir');
    const log = console.log.bind(console);

    watcher
      .on('add', path => log(`File ${path} has been added`))
      .on('change', path => log(`File ${path} has been changed`))
      .on('unlink', path => log(`File ${path} has been removed`));
  }
}
