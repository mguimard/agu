import { DayPipe } from './day.pipe';

describe('Suite de tests pour notre pipe Day', () => {

  let pipe: DayPipe

  beforeEach(() => {
    pipe = new DayPipe()
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should do the correct conversion', () => {
    let value = 1700000000 // '14/11/2023'
    let result = pipe.transform(value)
    expect(result).toBe('14/11/2023')
  })

});
