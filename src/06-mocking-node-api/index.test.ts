import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from './index';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

// -------------------- doStuffByTimeout --------------------

describe('doStuffByTimeout', () => {
  let setTimeoutSpy: jest.SpyInstance;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, 1000);

    expect(setTimeoutSpy).toHaveBeenCalledWith(callback, 1000);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, 1000);

    // Передвигаем таймер
    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

// -------------------- doStuffByInterval --------------------

describe('doStuffByInterval', () => {
  let setIntervalSpy: jest.SpyInstance;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    setIntervalSpy = jest.spyOn(globalThis, 'setInterval');
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, 500);

    expect(setIntervalSpy).toHaveBeenCalledWith(callback, 500);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, 500);

    jest.advanceTimersByTime(1500); // прошло 3 интервала

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

// -------------------- readFileAsynchronously --------------------

jest.mock('fs');
jest.mock('fs/promises');
jest.mock('path');

describe('readFileAsynchronously', () => {
  const mockedExistsSync = jest.mocked(existsSync);
  const mockedReadFile = jest.mocked(readFile);
  const mockedJoin = jest.mocked(join);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call join with pathToFile', async () => {
    mockedJoin.mockReturnValue('/mock/path');
    mockedExistsSync.mockReturnValue(false);

    await readFileAsynchronously('file.txt');

    expect(mockedJoin).toHaveBeenCalledWith(__dirname, 'file.txt');
  });

  test('should return null if file does not exist', async () => {
    mockedJoin.mockReturnValue('/mock/path');
    mockedExistsSync.mockReturnValue(false);

    const result = await readFileAsynchronously('no-file.txt');

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    mockedJoin.mockReturnValue('/mock/path');
    mockedExistsSync.mockReturnValue(true);
    mockedReadFile.mockResolvedValue(Buffer.from('mock content'));

    const result = await readFileAsynchronously('file.txt');

    expect(result).toBe('mock content');
  });
});
