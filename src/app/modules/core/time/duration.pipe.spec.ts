import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;
  const durationStubService = {
    formatDuration(millis: number): string {
      if (millis === 1000) {
        return '00:01';
      } else {
        return '';
      }
    }
  };

  beforeEach(() => {
    durationPipe = new DurationPipe(durationStubService);
  });

  it('should format duration for 1000 milliseconds', () => {
    const duration = durationPipe.transform(1000);
    expect(duration).toEqual('00:01');
  });
});
