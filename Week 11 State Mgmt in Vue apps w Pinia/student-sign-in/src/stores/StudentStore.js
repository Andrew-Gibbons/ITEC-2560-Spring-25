import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useStudentStore = defineStore("student", () => {

    const studentList = ref([
        { name: "A.Student", starID: "aa1234aa", present: false },
        { name: "B.Student", starID: "bb1234bb", present: false }
    ])

    const mostRecentStudent = ref( {} )

    function addNewStudent( student ) {
        studentList.value.push( student )
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( ( student ) => {
            return studentToDelete != student
        })
        mostRecentStudent.value = {}
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed(() => {
        return studentList.value.length
    })

    const sortedStudents = computed(() => {
        return studentList.value.toSorted((s1, s2) => { 
            return s1.name.localeCompare(s2.name)
        })
    })
    

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