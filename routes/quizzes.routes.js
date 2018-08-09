const router = require('express').Router()
const quizzesController = require('../controllers/quizzes.controller')

module.exports = router

// api routes ===========================================================
router.get('/', quizzesController.readAll);
router.get('/:id([0-9a-fA-F]{24})', quizzesController.readById);
router.post('/', quizzesController.create);
router.put('/:id([0-9a-fA-f]{24})', quizzesController.updateById);
router.delete('/:id([0-9a-fA-F]{24})', quizzesController._delete);