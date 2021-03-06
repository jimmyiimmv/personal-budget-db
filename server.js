const express = require('express');
const cors = require('cors');
//DB implementation
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
//original
const app = express();
const port = 4000;
const budgetModel = require("./models/budgets_schema")
let url = 'mongodb://localhost:27017/chartdata';
// BODY PARSER
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));
  

app.get('/hello', (req, res) => {
    res.send('Hello World!');

});

app.get('/budget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to the database")
        budgetModel.find({})
                .then((data)=>{
                    //console.log(data)
                    //console.log(data.length)
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })
    

}); //end of app.get()

app.post('/addbudget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(req.body.id)
        console.log(req.body.name,)
        console.log(req.body.budgetval)
        console.log(req.body.sectioncolor)

        var newBudget = {
            id: req.body.id,
            name: req.body.name,
            budgetval: req.body.budgetval,
            sectioncolor: req.body.sectioncolor
        };
        budgetModel.insertMany(newBudget)
                .then((data)=>{
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                });
    })
    .catch((connectionError) => {
        console.log(connectionError)
    });
    

}); //end of app.post()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

