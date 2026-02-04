<template>
  <div class="list">
    <AccountsTableHeader />

    <EmptyAccountsTable v-if="!drafts.length" />

    <div 
      v-else
      v-for="row in drafts" 
      :key="row.id" 
      class="row"
    >
      <div class="col col-labels">
        <el-form-item :error="row.errors.labels" class="fi">
          <el-input
            v-model="row.labelsText"
            placeholder="например: work; personal;"
            maxlength="50"
            show-word-limit
            @blur="validateAndSave(row)"
          />
        </el-form-item>
      </div>

      <div class="col col-type">
        <el-form-item class="fi">
          <el-select
            v-model="row.type"
            placeholder="Выберите"
            @change="onTypeChange(row)"
          >
            <el-option label="Локальная" value="LOCAL" />
            <el-option label="LDAP" value="LDAP" />
          </el-select>
        </el-form-item>
      </div>

      <div class="col col-login">
        <el-form-item :error="row.errors.login" class="fi">
          <el-input
            v-model="row.login"
            placeholder="Введите логин"
            maxlength="100"
            show-word-limit
            @blur="validateAndSave(row)"
          />
        </el-form-item>
      </div>

      <div class="col col-password">
        <template v-if="row.type === 'LOCAL'">
          <el-form-item :error="row.errors.password" class="fi">
            <el-input
              v-model="row.password"
              placeholder="Введите пароль"
              maxlength="100"
              show-word-limit
              show-password
              @blur="validateAndSave(row)"
            />
          </el-form-item>
        </template>
        <template v-else>
          <div class="password-placeholder">—</div>
        </template>
      </div>

      <div class="col col-actions">
        <el-button 
          type="danger" 
          circle plain
          aria-label="delete"
          @click="draftStore.removeDraft(row.id)"
        >
          🗑
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAccountsStore } from '@/entities/account';
import AccountsTableHeader from './AccountsTableHeader.vue';
import EmptyAccountsTable from './EmptyAccountsTable.vue';
import { useAccountDraftStore } from '@/entities/account/model/accountDraft.store';
import { AccountDraftRow } from '@/entities/account/model/types';
import { validateRow } from '@/features/account/model/validateDraft';
import { normalizeToAccount } from '@/features/account/model/normalizeDraft';

const accountsStore = useAccountsStore();
const draftStore = useAccountDraftStore();

draftStore.initDrafts();

const drafts = computed(() => draftStore.drafts)

function validateAndSave(row: AccountDraftRow) {
  const isValideRow = validateRow(row);

  if (!isValideRow) return;

  accountsStore.addAccount(normalizeToAccount(row));
  row.saved = true;
}

function onTypeChange(row: AccountDraftRow) {
  if (row.type === 'LDAP') {
    row.errors.password = undefined;
  }

  validateAndSave(row);
}
</script>

<style scoped>
.list {
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  overflow: hidden;
}

.row {
  border-top: 1px solid #f0f0f0;
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.8fr 1.8fr 70px;
  gap: 12px;
  align-items: start;
  padding: 12px;
}

.col-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 2px;
}

.fi {
  margin-bottom: 0;
}

.password-placeholder {
  height: 32px;
  display: flex;
  align-items: center;
  color: #999;
  padding-left: 6px;
}
</style>
