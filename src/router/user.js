const express = require('express')
const User = require('../models/user.js')
const router = new express.Router()


router.post('/users', async (req, res) => {

    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)

    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})


router.patch('/users/:id', async (req, res) => {

    //taking the keys entered by the users in postman (client side)
    const updates = Object.keys(req.body)
    const allowedupdates = ['name', 'email', 'password', 'age']
    const isvalidoperation = updates.every((update) => allowedupdates.includes(update))

    if (!isvalidoperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user)
    }
    catch (e) {
        res.status(400).send(e);
    }
})


router.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    try {
        if (!user) {
            return res.status(400).send();
        }
        res.send(user)
    }
    catch (e) {
        res.status(400).send(e);
    }
})



module.exports = router