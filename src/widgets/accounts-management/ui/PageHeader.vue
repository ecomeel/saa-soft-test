<template>
<div class="header">
  <h2 class="title">Учетные записи</h2>
  
  <el-button type="primary" circle @click="draftStore.addDraft" aria-label="add">
    <span class="plus">+</span>
  </el-button>
</div>
</template>

<script setup lang="ts">
import { useAccountDraftStore } from '@/entities/account/model/accountDraft.store';

const draftStore = useAccountDraftStore();
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.plus {
  font-weight: 800;
  font-size: 18px;
  line-height: 1;
}
</style>