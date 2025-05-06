import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { mande } from 'mande'

const studentAPI = mande('api/students')

// Create a store for student data
export const useStudentStore = defineStore("student", () => {

    const studentList = ref( [] )

    const mostRecentStudent = ref( {} )

    const addNewStudentErrors = ref( [] )

    function getAllStudents() {
        return studentAPI.get().then( students => {
            studentList.value = students
        })
    }

    // Actions
    function addNewStudent( student ) {
        studentAPI.post( student ).then( resp => {
            getAllStudents()
    }).catch( err => {
        addNewStudentErrors.value = err.body
    })
    }
    // Delete a student from the list
    function deleteStudent(studentToDelete) {
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            mostRecentStudent.value = {} 
            getAllStudents()
        })
    }

    // Update the most recent student to arrive or leave
    function arrivedOrLeft(student) {
        const editStudentAPI = mande(`api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            getAllStudents()
        })
    }

    const sortedStudents = computed(() => {
        return studentList.value.slice().sort((s1, s2) => s1.name.localeCompare(s2.name));
    });

    const studentCount = computed(() => {
        return sortedStudents.value?.length || 0;
    });
    
    
    

    return { 
        // reactive data
        sortedStudents,
        studentCount,
        mostRecentStudent,
        addNewStudentErrors,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        getAllStudents,

        // computed properties
        studentCount
        
    }

    // Sort the student list by name
    // const sortedStudents = computed(() => {
        // return studentList.value.toSorted((s1, s2) => { 
            // return s1.name.localeCompare(s2.name)
        // })
    })
    
        // Return the state, actions, and computed properties   
