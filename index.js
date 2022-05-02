require('dotenv').config()
const cors = require ('cors')
const morgan = require('morgan');
const express = require ('express');
const mongoose = require ('mongoose');

const app = express ()

const Router = require ('./router/router')

app.listen (process.env.PORT, (error) => error ? console.log(error) : console.log('Listen... port is active'));  // Порт
app.use (morgan (':method :url :status :res[content-length] - :response-time ms'));                               // Вывод о запросе
app.use (cors());                                                                                                        // Для запросов
app.use (Router)                                                                                                         // Роутер
app.use (express.json());                                                                                                // JSON PARSER
app.use (express.urlencoded ({extended: true}));                                                                  // BODY PARSER

mongoose.connect (process.env.MONGO_URL,                                                                                // Подруб к бд
    {useNewUrlParser: true,useUnifiedTopology: true}).then((res) =>
    console.log ('Connected to DB')).catch((error) => console.log (error))

app.use ((req, res) => {
    res.status(404)
});