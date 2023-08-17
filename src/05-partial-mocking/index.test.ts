// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';
//import lodash from 'lodash';


jest.mock('./index', () => {
  const originalModule = jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => ''),
    unmockedFunction: jest.fn(() => 'I am not mocked'),
    };

});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
  
  expect(mockOne()).toBe('');
  expect(mockTwo()).toBe('');
  expect(mockThree()).toBe('');
  
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here

    expect(unmockedFunction).toBe('I am not mocked');
  });
});
