const mongodb = require('mongodb')
const { MongoClient } = require ('mongodb')


const connectionurl = "mongodb://localhost:27017"
const database = 'details'


MongoClient.connect(connectionurl,(error,client)=>{
    if(error){
        return console.log('unable to make database')
    }

    const db = client.db(database)

    // db.collection('contact').insertMany([
    //     {
    //         name : 'Paresh',
    //         mobno : '6375211531'
    //     },{
    //         name : 'Sidhu',
    //         Mobno : '9376491531'
    //     }
    // ]),(error,res)=>{
    //     if(error){
    //         return console.log('unable to insert')
    //     }
    //     console.log(res.ops)
    // }


    // db.collection('contact').findOne({name :'Paresh'},(error,cont)=>{
    //     if(error){
    //         return console.log('not found')
    //     }

    //     console.log(cont)
    // })


    db.collection('contact').find({}).toArray((error,con)=>{
        console.log(con);
    })


    // db.collection('contact')
})
