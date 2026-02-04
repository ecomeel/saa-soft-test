import type { Account } from './types';
import { safeJsonParse } from '@/shared/lib/storage';

const STORAGE_KEY = 'accounts';

export function loadAccounts(): Account[] {
  const parsedAccounts = safeJsonParse<Account[]>(localStorage.getItem(STORAGE_KEY));
  return Array.isArray(parsedAccounts) ? parsedAccounts : [];
}

export function saveAccounts(accounts: Account[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
}
