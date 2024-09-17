require('./src/db/mongoose.js')

const Task = require('./src/models/task.js')

Task.findByIdAndDelete('66e8777a165d38c7c0423e29').then((tasks)=>{
    console.log(tasks)
    return Task.countDocuments({completed : true});
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})