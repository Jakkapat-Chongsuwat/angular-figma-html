import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig }            from './app/app.config';
import { AppComponent }         from './app/app.component';
import { environment }          from './environments/environment';

declare const module: any;

if (environment.hmr && module['hot']) {
  module['hot'].accept();
  module['hot'].dispose(() => {
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
