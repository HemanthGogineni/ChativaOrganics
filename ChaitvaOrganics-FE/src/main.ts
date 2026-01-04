import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideHttpClient(withFetch()),
    ...appConfig.providers
  ]
});

