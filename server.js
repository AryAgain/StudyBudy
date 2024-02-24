const express = require('express');
const server = express();
var bodyparser = require('body-parser')
const port = 4200;
var dburl = 'mongodb://localhost:27017/BrickHack'
const OpenAIApi = require("openai"); 
const readlineSync = require("readline-sync"); 
require("dotenv").config();
 
const Mongoose = require('mongoose');
const SubtaskModel = require('./subtaskmodel');

Mongoose.connect(dburl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

server.use(bodyparser.json());

// const newConfig = new Configuration({
//     apiKey: process.env.OPENAI_SECRET_KEY
// });

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_SECRET_KEY
});

server.post('/querygpt', async(req, res) => {
    try{
    console.log('Body Received=',req.body)

    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "Give me 5 names for toy",
        // "Divide the following project into" + 4 + "milestone tasks :" + req.body.projectdescription + ". Strictly give output only in following format : \"1 : task 1 , 2 : task 2, 3 : task 3  \" . A task not more than 5 words",
        max_tokens: 30,
    }).then((response) =>{
        return completion.choices[0].text;});
        res.status(200).json({ completion });
    }
    catch(error){
        console.error("Error while testing GPT:", error); // Log the actual error message
        res.status(500).json({ error: 'Internal Server Error' });
    }    
    return

});


// Defining a route for handling client communication
server.post('/saveproject', (req, res) => {

    console.log('Body Received=',req.body)
    
    var Subtaskdata = new SubtaskModel(req.body) 

    return Subtaskdata.save()
        .then(savedData => {
            console.log('result of add project db operation:', savedData);
            res.status(200).json({
                message: 'Project Added',
                data: savedData
            });
        })
        .catch(error => {
            console.error('Error saving project:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        });

});


server.post('/getforuser', (req, res) => {

    console.log('Body Received=',req.body)
    
    query = {username: req.body.username}

    var subtasks = []

    SubtaskModel.find(query)
        .then(savedData => {
            console.log('Found substask:', savedData);
            subtasks.push(...savedData);
            res.status(200).json({
                message: 'Found subtask from mongo',
                data: savedData
            });
        })
        .catch(error => {
            console.error('Error finding Substasks:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        });

});
 
// Starting the server
server.listen(port, function() {
    console.log('Server is listening on ', port);
});