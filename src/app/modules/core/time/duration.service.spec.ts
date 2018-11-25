import {DurationService} from './duration.service';

describe('DurationService', () => {

    let durationService: DurationService;

    ///////////////////////////////////////
    //    INITIALIZATION
    ///////////////////////////////////////

    beforeEach(() => {
        durationService = new DurationService();
    });

    ///////////////////////////////////////
    //    TESTS
    ///////////////////////////////////////

    it('should return 1 seconds duration', () => {
        const duration = durationService.formatDuration(1000);
        expect(duration).toEqual('00:01');
    });

    it('should return 10 seconds duration', () => {
        const duration = durationService.formatDuration(10000);
        expect(duration).toEqual('00:10');
    });

    it('should return 1 minute duration', () => {
        const duration = durationService.formatDuration(60000);
        expect(duration).toEqual('01:00');
    });

    it('should return 10 minutes and 10 seconds duration', () => {
        const duration = durationService.formatDuration(610000);
        expect(duration).toEqual('10:10');
    });

    it('should return 1 hour duration', () => {
        const duration = durationService.formatDuration(3600000);
        expect(duration).toEqual('01:00:00');
    });

    it('should return 10 hours, 10 minutes and 10 seconds duration', () => {
        const duration = durationService.formatDuration(36610000);
        expect(duration).toEqual('10:10:10');
    });
    
});
