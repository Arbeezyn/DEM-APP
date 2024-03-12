<script setup>
import { ref } from "vue";

const applications = ref([]);

const generateUniqueId = () => {
  return applications.value.length + 1;
};

const newApplication = {
  id: applications.value.length,
  Name: "",
  LastName: "",
  Date: "",
  Tools: "",
};

const saveInputData = () => {
  // if (!newApplication.value) {
  //   console.error("Ошибка: newApplication не определен");
  //   return;
  // }
  newApplication.id = generateUniqueId(); // Исправление генерации ID
  applications.value.push({ ...newApplication });

  try {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications.value),
      localStorage.getItem("applications")
    );
    console.log(localStorage.getItem("applications"));
  } catch (error) {
    console.error("Ошибка при сохранении заявки:", error);
  }
};

// const saveInputData = () => {
//   newApplication.id = generateUniqueId();
//   applications.value.push({ ...newApplication });
//   console.log(applications.value);
// };
</script>

<template>
  <div class="container">
    <h1>Заявка на ремонт</h1>
    <div class="form">
      <input
        type="text"
        v-model="newApplication.Name"
        placeholder="Введите имя"
      />
      <input
        type="text"
        v-model="newApplication.LastName"
        placeholder="Введите фамилию"
      />
      <input
        type="date"
        v-model="newApplication.Date"
        placeholder="Введите дату"
      />
      <input
        type="text"
        v-model="newApplication.Tools"
        placeholder="Введите инструменты"
      />
      <button @click="saveInputData">Отправить</button>
    </div>
  </div>
</template>

<style>
.container {
  width: 80%;
  background-color: white;
  margin: auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
}

.formView {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
}
</style>
