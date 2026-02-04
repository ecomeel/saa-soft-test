import { defineStore } from 'pinia';
import type { Account } from './types';
import { loadAccounts, saveAccounts } from './storage';

export const useAccountsStore = defineStore('accounts', {
  state: () => ({
    accounts: loadAccounts() as Account[],
  }),
  actions: {
    addAccount(account: Account) {
      const accountIdx = this.accounts.findIndex(a => a.id === account.id);

      accountIdx === -1 ?
        this.accounts.push(account) :
        this.accounts[accountIdx] = account

      saveAccounts(this.accounts);
    },

    remove(id: string) {
      this.accounts = this.accounts.filter(a => a.id !== id);
      saveAccounts(this.accounts);
    },
  },
});
