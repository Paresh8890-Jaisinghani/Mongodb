
//mpngodb native library
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

//string for connection
const connectionUrl = 'mongodb://localhost:27017';
const database = 'task-manager';


//connect the database from connection string
MongoClient.connect(connectionUrl, (error, client) => {
    if (error) {
        return console.log('Unable to connect:', error);
    }

    //using db methods provided by mongodb
    const db = client.db(database);
    db.collection('users').insertOne({
        name : "paresh",
        age : 21
})

})
