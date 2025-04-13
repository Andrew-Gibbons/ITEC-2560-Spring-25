// import { defineStore } from "pinia"
// import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { ref, computed } from "vue"

// Create a store for student data
export const useStudentStore = defineStore("student", () => {

    // State variables
    const studentList = ref([
        { name: "A.Student", starID: "aa1234aa", present: false },
        { name: "B.Student", starID: "bb1234bb", present: false }
    ])

    // Most recent student to arrive or leave
    const mostRecentStudent = ref( {} )

    // Actions
    function addNewStudent( student ) {
        studentList.value.push( student )
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

    // Computed properties
    const studentCount = computed(() => {
        return studentList.value.length
    })

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
        studentCount,
        sortedStudents
    }
})