const quizzes = require('./quizzes.json')

const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
}

module.exports = {
    findQuizById, findAllQuizzes
}