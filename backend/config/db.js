const mongoose = require('mongoose')

let connectionString = `mongodb+srv://akshatrait:${process.env.MONGO_PASS}@cluster0.7bwr4l2.mongodb.net/Company?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE'); 
  });
