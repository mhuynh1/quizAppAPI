const quizzesService = require('../services/quizzes.service')


const readAll = async (req, res) => {
    try {
        res.status(200).send(await quizzesService.readAll())
    } catch (err) {
        res.send(500).send(err)
    }
}

const create = async (req, res) => {
    try {
        res.status(200).send(await quizzesService.create(req.body))
    } catch (err) {
        res.status(500).send(new responses.ErrorResponse(err))
    }
}

const readById = async (req, res) => {
    try {
        res.status(200).send(await quizzesService.readById(req.params.id))
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const updateById = async (req, res) => {
    try {
        res.status(200).send(await quizzesService.updateById(req.params.id, req.body))
    }
    catch (err) {
        res.status(500).send(err)
    }
}


const _delete = async (req, res) => {
    try {
        res.status(200).send(await quizzesService._delete(req.params.id))
    }
    catch (err) {
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