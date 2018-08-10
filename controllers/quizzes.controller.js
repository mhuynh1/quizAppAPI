const quizzesService = require('../services/quizzes.service')
// const apiPrefix = '/api/quizzes';


const readAll = async (req, res) => {
    try {
        const quizzes = await quizzesService.readAll()
        res.status(200).send(quizzes)
    } catch (err) {
        console.log('quizzes controller error')
        res.send(500).send(err)
    }
}

const create = async (req, res) => {
    try {
        const quiz = await quizzesService.create(req.body)
        res.status(200).send(quiz)
    } catch (err) {
        console.log('quizzes controller error')
        res.status(500).send(new responses.ErrorResponse(err))
    }
}

const readById = async (req, res) => {
    try {
        const quiz = await quizzesService.readById(req.params.id)
        res.status(200).send(quiz)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const updateById = async (req, res) => {
    try {
        const quiz = await quizzesService.updateById(req.params.id, req.body)
        res.status(200).send(quiz)
    }
    catch (err) {
        res.status(500).send(err)
    }
}


const _delete = async (req, res) => {
    try {
        const quiz = await quizzesService._delete(req.params.id)
        res.status(200).send(quiz)
    }
    catch (err) {
        console.log(err)
        res.status(500).send(erro)
    }
}

module.exports = {
    readAll
    , readById
    , create
    , _delete
    , updateById
}