jest.mock('axios');
jest.mock('lodash');

import axios from 'axios';
import lodash from 'lodash';

const mockedAxios = jest.mocked(axios);
const mockedThrottle = jest.mocked(lodash.throttle);

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throttle function using lodash.throttle', async () => {
    // Сначала мокаем throttle, чтобы вернуть оригинальную функцию
    mockedThrottle.mockImplementation((fn: any) => fn);

    // Теперь импортируем тестируемый модуль — после мока
    const { throttledGetDataFromApi, THROTTLE_TIME } = require('./index');

    const mockGet = jest.fn().mockResolvedValue({ data: {} });
    mockedAxios.create.mockReturnValue({ get: mockGet } as any);

    await throttledGetDataFromApi('/posts');

    expect(mockedThrottle).toHaveBeenCalledWith(expect.any(Function), THROTTLE_TIME);
  });
});
