import { defineStore } from 'pinia';
import { AccountDraftRow } from './types';
import { labelsToText } from './helpers';
import { useAccountsStore } from './accounts.store';
import { generateId } from '@/shared/lib/id/generateId';

export const useAccountDraftStore = defineStore('accountDraft', {
  state: () => ({
    drafts: [] as AccountDraftRow[]
  }),
  actions: {
    initDrafts() {
      const store = useAccountsStore();

      this.drafts = store.accounts.map((a) => ({
        id: a.id,
        labelsText: labelsToText(a.labels),
        type: a.type,
        login: a.login,
        password: a.password ?? '',
        errors: {},
        saved: true,
      }))
    },

    addDraft() {
      this.drafts.push({
        id: generateId(),
        labelsText: '',
        type: 'LOCAL',
        login: '',
        password: '',
        errors: {},
        saved: false,
      })
    },

    removeDraft(id: string) {
      const accountsStore = useAccountsStore();
      const idx = this.drafts.findIndex(r => r.id === id);

      if (idx !== -1) {
        this.drafts.splice(idx, 1);
      }

      accountsStore.remove(id);
    }
  },
});
