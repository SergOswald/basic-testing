// Uncomment the code below and write your tests
// import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator(1, 2, '+')).toBe(3);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator(1, 2, '-')).toBe(-1);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator(3, 2, '*')).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator(3, 2, '/')).toBe(1.5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator(3, 2, '^')).toBe(9);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator(3, 0, '/')).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
