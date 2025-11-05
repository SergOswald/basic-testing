import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

//юнит-тесты на исключения и промисы

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect(await resolveValue("10")).toBe("10");
  });
});

// возвращает промис, который должен разрешиться (resolve) со значением "10".
// Ключевое слово await ждёт завершения промиса


describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError("10")).toThrow("10");
  });

  // Проверяет, что функция throwError("10") выбрасывает исключение.


  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
    
    // Проверяет поведение по умолчанию — если throwError вызвана без аргумента, она должна бросить ошибку с текстом 'Oops!'.
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });

  // Проверяет, что функция throwCustomError() бросает экземпляр пользовательского класса ошибки MyAwesomeError.
  // Jest сравнивает тип ошибки, а не только текст.

});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });

  // Проверяет асинхронную функцию, которая возвращает отклонённый промис (reject).

});
