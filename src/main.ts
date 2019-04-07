import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RetailModule } from './app/retail.module';
import { NetworkModule } from './app/network.module';
import { DairyModule } from './app/dairy.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DairyModule)
  .catch(err => console.error(err));
