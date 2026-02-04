<template>
<div class="head-row">
  <div class="col col-labels">Метки</div>
  <div class="col col-type">Тип записи</div>
  <div class="col col-login">Логин</div>
  <div class="col col-password">Пароль</div>
  <div class="col col-actions"></div>
</div>
</template>

<style scoped>
.head-row {
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.8fr 1.8fr 70px;
  gap: 12px;
  align-items: start;
  padding: 12px;
  background: #fafafa;
  font-size: 13px;
  color: #666;
}
</style>