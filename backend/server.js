const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv');
const Event = require('./models/Event.js');
const Employee = require('./models/Employee.js');
const path = require("path")
const PORT = 3000;
require('dotenv').config();
require('./config/db.js')

const app = express()
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use(morgan('dev'));
app.use(helmet());

app.use((req,res,next)=>{
    if (req.path.startsWith('/server')) {
        req.url = req.url.replace('/server', ''); // strip /server from the path
    }
    next();
})
// END MIDDLEWARE //

app.use(express.static(path.join(__dirname, "../client/dist")))

app.post('/events', async (req,res)=>{
    //1. Get data from frontend
    //2. Model.create(eventData)
    try{
        let response = await Event.create(req.body);
        res.send('Created a new element')
    }
    catch(error){
        console.error('Oh no', error)
    }
})
app.get('/events', async (req,res)=>{
    let arrayOfEvents = await Event.find()
    res.send(arrayOfEvents)
})

app.delete('/events/:idOfEvent', async (req,res)=>{
    let id = req.params.idOfEvent
    let response = await Event.findByIdAndDelete(id)
    res.send(
        'Event Deleted'
    )
})

app.post("/events/", async (req,res)=>{
    let response = await Event.create(req.body);
    res.send('Created a new element')
})


app.get('/employees', async (req,res)=>{
    let arrayOfEmployees = await Employee.find()
    res.send(arrayOfEmployees)
})

app.post('/employees/', async (req,res)=>{
    let response = await Employee.create(req.body);
    res.send('Created a new element')
})


// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/', '/index.html'));

//   });


app.listen(PORT,()=>{
    console.log(`Server is LIVE on port ${PORT}`);
})