<!-- import NewStudentForm, StudentTable, and StudentMessage.vue's -->
<script setup>

// Importing necessary modules and components
import { onMounted } from 'vue'
import NewStudentForm from './components/NewStudentForm.vue' 
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'
import { useStudentStore } from './stores/StudentStore'

// Importing the Pinia store for managing student data
const studentStore = useStudentStore()

// Fetching all students when the component is mounted
// This function is called when the component is mounted
// It uses the studentStore to fetch all students from the API
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
