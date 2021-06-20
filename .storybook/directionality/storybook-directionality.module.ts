import { Directionality } from '@angular/cdk/bidi';
import { NgModule } from '@angular/core';
import { StorybookDirectionalityService } from './storybook-directionality.service';

@NgModule({
  providers: [
    { provide: Directionality, useClass: StorybookDirectionalityService },
  ],
})
export class StorybookDirectionalityModule { }
