import { getEndOfDay } from '@/utils/date/commonDate';

describe('commonDate.ts', (): void => {
  describe('getEndOfDay', (): void => {
    it('Should return correct end of the day date object', (): void => {
      const timestamp: number = 1711850400000;
      expect(getEndOfDay(timestamp).getTime()).toBe(1711929599000);
    });
  });
});
