/*eslint no-console: ["off"] */
import { environment } from '@/environment/environment';

class Logger {

  constructor() {
    this.initLogger();
  }

  initLogger() {
    if (environment !== 'production') {
      this.log = console.log.bind(console);
      this.debug = console.debug.bind(console);
      this.info = console.info.bind(console);
      this.warn = console.warn.bind(console);
      this.error = console.error.bind(console);
      this.logToServer = this.error;
    } else {
      this.log = this.debug = this.info = this.warn = this.error = () => {};
      this.logToServer = err => {
        console.error(err); //
      };
    }
  }

}

const logger = new Logger();
export { logger };