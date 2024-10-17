import { WeatherCodes } from './weather-codes';

describe('WeatherCodes', () => {
  it('should return an object', () => {
    expect(WeatherCodes(0)).toBeInstanceOf(Object);
  });
});
