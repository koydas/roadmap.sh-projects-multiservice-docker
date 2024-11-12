const express = require('express');
var cors = require('cors')
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

const uri = "mongodb://localhost:27017";   
const mongoClient = new MongoClient(uri);

app.get("/users", async (req, res) => {
    await mongoClient.connect()

    const users = await mongoClient.db('sh-projects-multiservice-docker')
                                   .collection('users')
                                        .find().toArray()

    res.send(users)
})

app.post("/users", async (req, res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    
    await mongoClient.db('sh-projects-multiservice-docker')
               .collection('users')
               .insertOne(newUser)

    res.send(newUser)
})

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);
}
);
