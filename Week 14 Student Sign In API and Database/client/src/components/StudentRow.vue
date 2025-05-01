<script setup>

// Import the ref function from Vue
import { ref } from 'vue'

// Define the props and emits for the component
const props = defineProps({
    student: Object
})

const emit = defineEmits(['arrived-or-left', 'delete-student'])

// A new ref to track if the student is present or not
const isStudentPresent = ref( props.student.present )

// Create a function to notify the parent component when the student arrives or leaves
const notifyArrivedOrLeft = () => {
    emit('arrived-or-left', props.student, isStudentPresent.value) 
}

// Create a function to confirm and delete the student
const confirmThenDeleteStudent = () => {
    if (confirm(`Are you sure you want to delete ${props.student.name}?`)) {
        emit('delete-student', props.student)
    }
}

</script>

<template>

<!-- Create a table row with table data of student.name, student.starID -->
 <!--Create input checkbox for if student is present or not -->
 <!-- Create an alert for a delete button -->
<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
                            <td>{{ student.name }}</td>
                            <td>{{ student.starID }}</td>
                            <td> 
                                <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
                                <span class="mx-3" v-if="student.present">Here!</span>
                                <span class="mx-3" v-else>Not present</span>
                            </td>
                            <td>
                                <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </button>
                            </td>
                        </tr>
                  

                    
</template>

<style scoped>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>