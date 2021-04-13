const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {

    // /api/quizzes/:qid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qid;
        const questions = questionsService
            .findQuestionsForQuiz(qzid)
        res.send(questions)
    }

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
}
