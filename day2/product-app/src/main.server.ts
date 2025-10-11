import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { app } from './app/app.server.module';

if (environment.production) {
  enableProdMode();
}

export { app as default } from './app/app.server.module';
