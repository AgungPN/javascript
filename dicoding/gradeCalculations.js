const averageExams = (value) => {
    const isNumber = value.every(exam => typeof exam === 'number')
    if (!(isNumber)) throw Error('please input number')
    const sum = value.reduce((a, b) => a + b, 0)
    return sum / value.length
}

const isStudentPassExam = (value, name) => {
    const minExam = 75
    const average = averageExams(value)
    if (minExam > average) {
        console.log(`${name} telah gagal tes`)
        return true
    }
    else {
        console.log(`${name} anda telah lulus tes`)
        return false
    }

}
// module.exports = {averageExams,isStudentPassExam}
export default { averageExams, isStudentPassExam }