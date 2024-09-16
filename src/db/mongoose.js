// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/taks-manager-api')


// const Task = mongoose.model('Task',{
//     description : {
//         type : String
//     },
//     completed : {
//         type : Boolean
//     }
// });


// const nw = new Task({
//     description : "completed your first Task",
//     completed : true
// })

// nw.save().then(()=>{
//     console.log(nw)
// }).catch((error)=>{
//     console.log(error);
// })


const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


// const nw = new User({
//     name : 'Paresh',
//     age : 21,
//     email : "paresh@2.com"
// })

// nw.save().then(()=>{
//     console.log(nw);
// }).catch((error)=>{
//     console.log(error)
// })