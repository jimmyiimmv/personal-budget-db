const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mongodb_demo';

//CRUD

// connect
mongoDBClient.connect(url, { useUnifiedTopology: true }, (operationError, dbHandler)=>{
    if (operationError){
        console.log("An error has occurred during the connection process");
    }
    else {
        console.log("Connected to Database")
        
// Insert operation
        
// perform operation

// close connection
        /*
        let data = {id: 10, name: "added a new name from mongoDB Native Driver"};
        dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operr, opresult)=>{
            if (operr)
            {
                console.log("Unable to insert data into your collection")
            } else {
                console.log("Successfully inserted data")
                dbHandler.close()
            }
        })
        */

        // List Operation
        /*
        dbHandler.db('mongodb_demo').collection('names').find().toArray((operr, opresult)=>{
            if (operr)
            {
                console.log(operr)
            } else {
                for (var i=0; i < opresult.length; i++){
                    console.log(opresult[i])
                }
                dbHandler.close()
            }
        });
        */

        // Fetch Operation
        /*
        dbHandler.db('mongodb_demo').collection('names').findOne({id: 1}, (operr, opresult)=>{
            if (operr)
            {
                console.log(operr)
            } else {
                console.log(opresult)
                dbHandler.close()
            }
        })
        */

        // Update Operation
        /*
        let newData = {$set: {id: 11, name: "added a new name from mongoDB Native Driver"}};
        dbHandler.db('mongodb_demo').collection('names').updateOne({id: 1}, newData, (operr, opresult)=>{
            if (operr)
            {
                console.log("Unable to UPDATE data into your collection")
            } else {
                console.log("Successfully UPDATED data")
                dbHandler.close()
            }
        })
        */

        // Delete Operation
        /*
        dbHandler.db('mongodb_demo').collection('names').deleteOne({id: 11}, (operr, opresult)=>{
            if (operr)
            {
                console.log("Unable to DELETE data into your collection")
            } else {
                console.log("Successfully DELETEd data")
                dbHandler.close()
            }
        })
        */

        // Bulk Delete Operation
        /*
        dbHandler.db('mongodb_demo').collection('names').deleteMany({id: 10}, (operr, opresult)=>{
            if (operr)
            {
                console.log("Unable to DELETE data into your collection")
            } else {
                console.log("Successfully DELETEd data")
                dbHandler.close()
            }
        })
        */


    }
});
