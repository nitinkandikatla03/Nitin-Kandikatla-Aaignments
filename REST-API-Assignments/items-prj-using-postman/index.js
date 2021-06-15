const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const connection = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/itemsDB?retryWrites=true&w=majority';
const connector = mongoose.connect(connection,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// mongoose.connect(connection);

mongoose.connection.on('connected',()=>{
    console.log("connected");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(routes);
app.use((err,req,res,next) => {
res.send({error: err.message});
})

app.listen(4000,() => {
    console.log('server is listeng');
})