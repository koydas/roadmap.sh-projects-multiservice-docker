const express = require('express');
var cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

const users = [{
    id: 1,
    firstName: 'john',
    lastName: 'doe'
}]

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    const newId = users[users.length - 1].id + 1
    const newUser = {
        id: newId,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    
    users.push(newUser)
    
    const msg = `New user added: ${newId} '${newUser.firstName} ${newUser.lastName}'`
    console.log(msg)
    res.send(msg)
})

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);
}
);
