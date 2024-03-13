import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {FormsModule, NgModel} from "@angular/forms";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), FormsModule, NgModel]
};
