import {ModuleWithProviders, NgModule} from '@angular/core';
import {DurationPipe} from './duration.pipe';
import {DurationService} from './duration.service';

@NgModule({
    declarations: [
        DurationPipe
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
