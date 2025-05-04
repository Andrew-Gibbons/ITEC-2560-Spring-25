import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { mande } from 'mande'

const studentAPI = mande('api/students')

// Create a store for student data
export const useStudentStore = defineStore("student", () => {

    const sortedStudens = ref( [] )

    const mostRecentStudent = ref( {} )

    function getAllStudents() {
        studentAPI.get().then( students => {
            studentList.value = students
        })
    }



    // Actions
    function addNewStudent( student ) {
        studentAPI.post( student ).then( () => getAllStudents() )
    }

    // Delete a student from the list
    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( ( student ) => {
            return studentToDelete != student
        })
        mostRecentStudent.value = {}
    }

    // Update the most recent student to arrive or leave
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }



    // Sort the student list by name
    const sortedStudents = computed(() => {
        return studentList.value.toSorted((s1, s2) => { 
            return s1.name.localeCompare(s2.name)
        })
    })
    
        // Return the state, actions, and computed properties   
        return { 
        studentList,
        mostRecentStudent,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        getAllStudents,
        studentCount,
        sortedStudents
    }
})