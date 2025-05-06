<script setup>

// Import the ref function from Vue
// import useStudentStore from the StudentStore.js file
import { ref, watch } from 'vue'

import { useStudentStore } from '../stores/StudentStore.js'
import { storeToRefs } from 'pinia'

// Create a constant for the student store
const studentStore = useStudentStore()

// Create a new ref for the student name and star ID
const newStudentName = ref('')
const newStarID = ref('')

// Create a new ref for the form errors
const formErrors = ref([])

const { addNewStudentErrors } = storeToRefs(studentStore)

watch(() => addNewStudentErrors.value, (newErrors) => {
    if (newErrors?.length) {
        alert(newErrors.join('\n'));
    }
});


// Create a function to add a new student
const addStudent = () => {
    formErrors.value = [];

    if (!newStudentName.value) {
        formErrors.value.push('Name is required.');
    }

    if (!newStarID.value) {
        formErrors.value.push('Star ID is required.');
    }

    // if there are no errors, add the student
    if (formErrors.value.length == 0) {
        let student = {
            name: newStudentName.value,
            starID: newStarID.value,
            present: false
        }
            // Add the student to the store
        studentStore.addNewStudent(student)

            // Clear the form fields after submission
        newStudentName.value = ''
        newStarID.value = ''
    }
}


</script>


<template>

        <!-- Create a div with an output of the errors -->
        <div id="new-student-form-errors" class="m-2">
            <div class="alert alert-danger" v-if="formErrors.length > 0">
                <li v-for="error in formErrors" v-bind:key="error">
                    {{ error }}
                </li>
            </div>
        </div>

        <!-- Create aform div for Add new -->
        <div id="new-student-form" class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>
            
            <!-- Create a form div for the Name -->
            <div class="form-group mb-3">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim="newStudentName">
            </div>

            <!-- Create a form div for the Star ID -->
            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                <input id="starID" class="form-control" v-model.trim="newStarID">
            </div>

            <!-- Create a button to add the student -->
            <button class="btn btn-primary" v-on:click="addStudent">Add</button>
        </div>

</template>


<styles scoped>


</styles>