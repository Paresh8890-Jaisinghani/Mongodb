const express = require('express')
const Task = require('../models/task.js')
const router = new express.Router()



router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})


router.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({});
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task)
    }
    catch (e) {
        res.status(400).send(e);
    }
})


router.patch('/tasks/:id',async(req,res)=>{

    const updates = Object.keys(req.body);
    const allowedupdate = ['description','completed'];
    const isvalidoperation = updates.every((update)=>allowedupdate.includes(update));

    if(!isvalidoperation){
        return res.status(404).send({error : 'Invalid updates'})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true});
        if(!task){
            return res.status(400).send()
        }
        res.send(task);
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete('/tasks/:id',async(req,res)=>{
    const tasks = await Task.findByIdAndDelete(req.params.id)
    try{
        if(!tasks){
            return res.status(400).send()
        }
        res.send(tasks)
    }
    catch(e){
        res.status.send(e);
    }
})

module.exports = router;