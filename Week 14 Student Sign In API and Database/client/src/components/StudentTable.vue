<script setup>

// import { useStudentStore } from '../stores/StudentStore.js'
// import { storeToRefs } from 'pinia'
// import { computed } from 'vue'
// import StudentRow from './StudentRow.vue'
import { useStudentStore } from '../stores/StudentStore.js'

import { storeToRefs } from 'pinia'

import { computed } from 'vue'

import StudentRow from './StudentRow.vue'

// Create constant for the student store
const studentStore = useStudentStore()

// Create constant for the student store's state
const { sortedStudents, studentCount } = storeToRefs(studentStore)

// Create functions to delete a student and mark a student as present or absent
const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

// Create function to mark a student as present or absent
const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

// Create a computed property for the plural student message
const pluralStudentMessage = computed(() => {
    if (studentCount.value == 1) {
        return 'There is 1 student in class.'
    } else {
        return `There are ${studentCount.value} students in class.`
    }
})
</script>


<template>

<!-- Create a div for the student list table -->
<div id="student-list-table" class="card m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <h5 class="card-subtitle text-muted"> {{ pluralStudentMessage }}</h5>
            <!-- <h5>There are {{ studentCount }} student(s) in class.</h5> -->

            <!-- Create a div for the student table -->
            <div id="student-table">
                <table class="table">
                    <thead>
                        <tr class="align-middle">
                            <th>Name</th>
                            <th>StarID</th>
                            <th>Present?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        <!-- Create a row for each student in the student list -->
                         <!-- Create v-bind for student -->
                          <!-- Create v-on for arrivedOrLeft -->
                           <!-- Create v-on for deleteStudent -->
                        <StudentRow
                            v-for="student in sortedStudents"
                            v-bind:student="student"
                            v-on:arrived-or-left="arrivedOrLeft"
                            v-on:delete-student="deleteStudent">
                        </StudentRow>
                        
                    </tbody>
                </table>
            </div>
        </div>

</template>


<style scoped>

#student-table {
    max-height: 500px;
    overflow: scroll;
}

th, td {
    width: 25%;
    text-align: center;
}

</style>