const express = require('express')
require('./db/mongoose')
const UserRouter = require('./router/user.js')
const TaskRouter = require('./router/task.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})