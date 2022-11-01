
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let file = [
    "slackUsername"="LFTYDV",
    "backend"= true,
    "age"= 28,
    "bio"= "i am a tech entusiast with knowledge in Vuejs and Nuxtjs, always willing to learn and upskill at every point in time."
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get( (req, res) => {
    return res.json( { file })
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));