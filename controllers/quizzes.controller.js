const quizzesService = require('../services/quizzes.service')
// const apiPrefix = '/api/quizzes';


const readAll = (req, res) => {
    quizzesService.readAll()
        .then(quizzes => {
            res.status(200).send(quizzes)
        })
        .catch(err => {
            console.log('quizzes controller error')
            res.send(500).send(err)
        })
}

const create = (req, res) => {
    quizzesService.create(req.body)
        .then(quiz => {
            res.status(200).send(quiz)
        })
        .catch(err => {
            console.log('quizzes controller error')
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

const readById = (req, res) => {
    quizzesService.readById(req.params.id)
        .then(quizzes => {
            res.status(200).send(quizzes)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const updateById = (req, res) => {
    quizzesService.updateById(req.params.id, req.body)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(500).send(error)
        })
}



const _delete = (req, res) => {
    quizzesService._delete(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
}

module.exports = {
    readAll
    , readById
    , create
    , _delete
    , updateById
}