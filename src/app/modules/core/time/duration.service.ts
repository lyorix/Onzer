import {Injectable} from '@angular/core';

/**
 * Service for durations management
 */
@Injectable({
  providedIn: 'root'
})
export class DurationService {

  /**
   * Format a number of milliseconds as duration: hh:mm:ss.
   * Hours are not displayed for durations less than one hour.
   * @param millis - the number of milliseconds
   * @return the duration as string
   */
  public formatDuration(millis: number): string {
    let durationText = '';
    if (millis >= 0) {
      const seconds = Math.trunc(millis / 1000);
      const minutes = Math.trunc(seconds / 60);
      const hours = Math.trunc(minutes / 60);
      if (hours % 24 > 0) {
        durationText += (hours % 24 < 10) ? '0' + hours % 24 : hours % 24;
        durationText += ':';
      }
      durationText += (minutes % 60 < 10) ? '0' + minutes % 60 : minutes % 60;
      durationText += ':';
      durationText += (seconds % 60 < 10) ? '0' + seconds % 60 : seconds % 60;
    }
    return durationText;
  }

}
