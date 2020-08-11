import { NgModule } from '@angular/core';

import { AuthGuard } from '@app/guards';
import {
  TranslateService,
  TRANSLATION_PROVIDERS
} from '@app/pipes';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    AuthGuard,
    DatePipe,
    TRANSLATION_PROVIDERS,
    TranslateService
  ]
})
export class CoreModule {}
