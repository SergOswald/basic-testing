/*

import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';
//import lodash from 'lodash';

// демонстрирует частичное (partial) мокирование модуля в Jest

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
    mockOne();
    mockTwo();
    mockThree();
    expect(jest.spyOn(console, 'log')).not.toHaveBeenCalled();
  
  });

  test('unmockedFunction should log into console', () => {
    console.log = jest.fn();
    unmockedFunction();
    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });

});

*/

import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

// Частичное мокирование модуля
jest.mock('./index', () => {
  // Берём оригинальный модуль, чтобы сохранить не подменённые функции
  const originalModule = jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking example', () => {
  afterAll(() => {
    // После всех тестов возвращаем оригинальный модуль
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not call console.log', () => {
    // Подключаем шпион до вызовов функций
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Вызываем замоканные функции
    mockOne();
    mockTwo();
    mockThree();

    // Проверяем, что console.log не вызывался
    expect(logSpy).not.toHaveBeenCalled();

    // Восстанавливаем оригинальную функцию
    logSpy.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    // Подменяем console.log на мок, чтобы проверить вызов
    const logMock = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Эта функция не замокана — должна вызвать console.log
    unmockedFunction();

    // Проверяем, что был вызов с нужным текстом
    expect(logMock).toHaveBeenCalledWith('I am not mocked');

    // Возвращаем исходное состояние
    logMock.mockRestore();
  });
});



