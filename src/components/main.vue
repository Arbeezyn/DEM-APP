<script setup></script>

<template>
  <div class="form">
    <input type="text" placeholder="Введите имя" />
    <input type="text" placeholder="Введите фамилию" />
    <input type="date" placeholder="Введите дату" />
    <input type="text" placeholder="Введите инструменты" />
    <button @click="saveInputData">Отправить</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
}
</style>
