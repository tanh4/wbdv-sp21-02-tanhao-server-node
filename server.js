const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://tanhao:wxh201314@cluster0.rkmfd.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 5000)