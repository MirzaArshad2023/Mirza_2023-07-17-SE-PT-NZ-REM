const express = require('express')
const appRouter = express.Router()
const Controllers = require('../controllers')

appRouter.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})
appRouter.post('/create', (req, res) => {
    Controllers.userController.createUsers(req.body, res)
})

appRouter.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})

appRouter.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = appRouter;