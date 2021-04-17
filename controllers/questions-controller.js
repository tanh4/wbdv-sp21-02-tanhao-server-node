const questionsService = require('../services/questions/questions-service')
module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions)))
    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}


/*
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
*/