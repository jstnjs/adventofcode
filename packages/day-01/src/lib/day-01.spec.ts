import { challenge01, challenge02 } from './day-01';

describe('day01', () => {
  it('should work', () => {
    expect(challenge01()).toEqual(75501);
  });

  it('should work 2', () => {
    expect(challenge02()).toEqual(215594);
  });

});
