<!-- import NewStudentForm, StudentTable, and StudentMessage.vue's -->
<script setup>

import { onMounted } from 'vue'

import NewStudentForm from './components/NewStudentForm.vue'; 
import StudentTable from './components/StudentTable.vue';
import StudentMessage from './components/StudentMessage.vue';

import { useStudentStore } from './stores/StudentStore'

const studentStore = useStudentStore()

onMounted(() => {
  studentStore.getAllStudents()
})

</script>

<!-- This piece of code defines the structure of a Vue.js single file component's -->
<template>
<NewStudentForm></NewStudentForm>
<StudentTable></StudentTable>
<StudentMessage></StudentMessage>
</template>

<style scoped>
</style>
