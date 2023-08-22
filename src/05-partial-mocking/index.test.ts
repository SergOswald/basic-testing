// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';
//import lodash from 'lodash';


jest.mock('./index', () => {
  const originalModule = jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
    };

});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    mockOne();
    mockTwo();
    mockThree();
    expect(jest.spyOn(console, 'log')).not.toHaveBeenCalled();
  
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here

    console.log = jest.fn();
    unmockedFunction();
    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });
});
