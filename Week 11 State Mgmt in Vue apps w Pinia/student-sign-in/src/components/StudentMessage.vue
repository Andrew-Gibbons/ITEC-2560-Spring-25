<script setup>

// Import useStudentStore from the StudentStore.js file
// Import storeToRefs from the pinia library
import { useStudentStore } from '../stores/StudentStore.js'
import { storeToRefs } from 'pinia'

// Create a constant for the student store
const studentStore = useStudentStore()

// Create a constant for the most recent student
const { mostRecentStudent } = storeToRefs(studentStore)

</script>


<template>

        <!-- Create a div for the student list table -->
         <!-- Create a welcome and departing message to student -->
        <div id="welcome-or-goodbye-message" class="m-2">
            <div v-if="mostRecentStudent.name">

                <div v-if="mostRecentStudent.present" class="alert alert-success">
                    Welcome, {{ mostRecentStudent.name }}!
                </div>
                <div v-else class="alert alert-info">
                    Goodbye, {{ mostRecentStudent.name }}. See you later!
                </div>     
            </div>  
        </div>

</template>


<styles scoped>


</styles>