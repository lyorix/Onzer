import {Pipe, PipeTransform} from '@angular/core';
import {DurationService} from './duration.service';

/**
 * Duration pipe to transform a number of milliseconds to a duration
 */
@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {

    constructor(public durationService: DurationService) {
    }

    /**
     * Takes a number of milliseconds and display duration.
     */
    transform(value: number) {
        return this.durationService.formatDuration(value);
    }

}
