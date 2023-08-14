// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError, } from './index';
import lodash from 'lodash';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const gBA=getBankAccount(10);
    expect(gBA["_balance"]).toBe(10);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect((new InsufficientFundsError(10)).toString()).toBe(`Error: Insufficient funds: cannot withdraw more than 10`);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect((new TransferFailedError).toString()).toBe('Error: Transfer failed');
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect((new SynchronizationFailedError).toString()).toBe('Error: Synchronization failed');

  });

  test('should deposit money', () => {
    // Write your test here
    const gBAt=getBankAccount(10).deposit(100);
    expect(gBAt["_balance"]).toBe(110);
  });

  test('should withdraw money', () => {
    // Write your test here
    const gBAtd=getBankAccount(100).withdraw(10);
    expect(gBAtd["_balance"]).toBe(90);
  });

  test('should transfer money', () => {
    // Write your test here
    const gBAtd=getBankAccount(100).transfer(10, getBankAccount(100));
    expect(gBAtd["_balance"]).toBe(90);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const gBAtd=getBankAccount(100).transfer(10, getBankAccount(100));
    expect(gBAtd["_balance"]).toBe(90);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    jest.spyOn(lodash, 'random').mockImplementation(() => 10);
    const gBAtd=await getBankAccount(100).fetchBalance();
    expect(gBAtd).toBe(10);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    expect((new SynchronizationFailedError).toString()).toBe('Error: Synchronization failed');
  });
});
