// Uncomment the code below and write your tests
import {simpleCalculator, Action} from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 1, b: 2, action: Action.Subtract, expected: -1 },
    { a: 2, b: 2, action: Action.Subtract, expected: 0 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
    { a: 2, b: 2, action: Action.Divide, expected: 1 },
    { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
    { a: 1, b: 2, action: Action.Multiply, expected: 2 },
    { a: 2, b: 2, action: Action.Multiply, expected: 4 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 }
    
    // continue cases for other actions    
]; 

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  //test('should blah-blah', () => {expect(true).toBe(true);});

 // delete testCases[0].expected;


  test('should add two numbers', () => {
    expect(simpleCalculator(testCases[0] as { a: number; b: number; action: string })).toBe(3);
  });

  test('should add two numbers', () => {
    expect(simpleCalculator(testCases[1] as { a: number; b: number; action: string })).toBe(4);
  });

  test('should add two numbers', () => {
    expect(simpleCalculator(testCases[2] as { a: number; b: number; action: string })).toBe(5);
  });

  test('should Subtract two numbers', () => {
    expect(simpleCalculator(testCases[3] as { a: number; b: number; action: string })).toBe(-1);
  });

  test('should Subtract two numbers', () => {
    expect(simpleCalculator(testCases[4] as { a: number; b: number; action: string })).toBe(0);
  });

  test('should Subtract two numbers', () => {
    expect(simpleCalculator(testCases[5] as { a: number; b: number; action: string })).toBe(1);
  });

  test('should Divide two numbers', () => {
    expect(simpleCalculator(testCases[6] as { a: number; b: number; action: string })).toBe(0.5);
  });

  test('should Divide two numbers', () => {
    expect(simpleCalculator(testCases[7] as { a: number; b: number; action: string })).toBe(1);
  });

  test('should Divide two numbers', () => {
    expect(simpleCalculator(testCases[8] as { a: number; b: number; action: string })).toBe(1.5);
  });

  test('should Multiply two numbers', () => {
    expect(simpleCalculator(testCases[9] as { a: number; b: number; action: string })).toBe(2);
  });

  test('should Multiply two numbers', () => {
    expect(simpleCalculator(testCases[10] as { a: number; b: number; action: string })).toBe(4);
  });

  test('should Multiply two numbers', () => {
    expect(simpleCalculator(testCases[11] as { a: number; b: number; action: string })).toBe(6);
  });

  test('should Exponentiate two numbers', () => {
    expect(simpleCalculator(testCases[12] as { a: number; b: number; action: string })).toBe(1);
  });

  test('should Exponentiate two numbers', () => {
    expect(simpleCalculator(testCases[13] as { a: number; b: number; action: string })).toBe(4);
  });

  test('should Exponentiate two numbers', () => {
    expect(simpleCalculator(testCases[14] as { a: number; b: number; action: string })).toBe(9);
  });




  // Consider to use Jest table tests API to test all cases above
});
