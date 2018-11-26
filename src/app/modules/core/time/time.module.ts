import {ModuleWithProviders, NgModule} from '@angular/core';
import {DurationPipe} from './duration.pipe';
import {DurationService} from './duration.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe
  ]
})
export class TimeModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TimeModule,
      providers: [
        DurationService
      ]
    };
  }

}
