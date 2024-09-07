const mongodb = require('mongodb')
const {MongoClient,ObjectID} = require('mongodb')


const Id = new ObjectID()
console.log(Id)
console.log(Id.getTimestamp())

const connectionurl = 'mongodb://localhost:27017';
const database = "task-manager"

MongoClient.connect(connectionurl,(error,client)=>{
    if(error){
        return console.log("unabale to connect")
    }

    const db = client.db(database);
    db.collection('tasks').insertMany([
        {
            description : 'first task',
            completed : true
        },
        {
            description : 'second task',
            completed : false
        }
    ],(error,res)=>{
        if(error){
            return console.log("unable to insert");
        }

        // console.log(res.ops);
    })
})


