import { WeatherCodePipe } from './weather-code.pipe';

describe('WeatherCodePipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherCodePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return beau if code is 0', () => {
    const pipe = new WeatherCodePipe()
    let text = pipe.transform(0)
    expect(text).toBe('Beau')
  })

  
});
