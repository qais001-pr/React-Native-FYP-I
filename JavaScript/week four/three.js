let Students = [{ regno: 1, name: 'Ali', marks: 100 }, { regno: 2, name: 'Usman', marks: 40 }, { regno: 3, name: 'Zain', marks: 80 }]

Students.forEach((element) =>
    console.log(`Student regno:${element.regno}\t name:${element.name}`)
)
//Scored Students
ScoredStudent = Students.filter((st) => st.marks >= 50)


//Grade According to the Marks Score
let finalStudent = []

ScoredStudent.forEach((student) => {
    if (student.marks >= 80) {
        finalStudent.push({
            regno: student.regno, name: student.name, grade: 'A'
        })
    }
})
console.log(finalStudent)

finalStudent.forEach((element) => { console.log(`ID: ${element.regno}`) })