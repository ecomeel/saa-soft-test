<template>
  <main class="page">
    <PageHeader />

    <LabelsHint />

    <AccountsManagementWidget />
  </main>
</template>

<script setup lang="ts">
import LabelsHint from '@/widgets/accounts-management/ui/LabelsHint.vue';
import PageHeader from '@/widgets/accounts-management/ui/PageHeader.vue';
import AccountsManagementWidget from '@/widgets/accounts-management/ui/AccountsManagementWidget.vue';
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 24px 16px;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
