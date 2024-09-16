const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


// app.get('/users',(req,res)=>{
//     res.send('working')
// })


app.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.status(201).res.send(user)
    }).catch((error)=>{
        res.status(400)
        res.send(error)
    })

})

app.post('/tasks',(req,res)=>{
    const tasks = new Task(req.body);

    tasks.save().then(()=>{
       res.status(201).res.send(tasks)
    }).catch((e)=>{
        res.status(400)
        res.send(e)
    })

})



app.listen(port,()=>{
    console.log("Server is up on port " + port);
})