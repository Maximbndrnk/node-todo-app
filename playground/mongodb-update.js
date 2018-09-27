// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {  //v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectId("5bac75e4c141f94d7c67f570") },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then(res => {
    //         console.log(res);

    //     });


        db.collection('Users').findOneAndUpdate(
            { _id: new ObjectId("5ba88579ec4bcc24e0f63273") },
            {
                $set: {
                    name: 'Incognito'
                },
                $inc: {
                    age:500
                }
            },
            {
                returnOriginal: false
            }).then(res => {
                console.log(res);
    
            });

    // db.close();
});