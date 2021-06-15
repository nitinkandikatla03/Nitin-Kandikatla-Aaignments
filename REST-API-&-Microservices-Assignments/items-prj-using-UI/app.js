// var sum=require('./operations/sum');
// var mul=require('./operations/mul');
// var sub=require('./operations/sub');
// var div=require('./operations/div');


// console.log(sum.sumOfNum(3,7));
// console.log(mul.mulOfNum(3,7));
// console.log(sub.subOfNum(3,7));
// console.log(div.divOfNum(3,7));
// console.log(demo.mulOfNum(3,7));
// var fs=require('fs');

// fs.readFile('demo.txt', 'utf8' , (err, data) => {
    
//     var data1 = data.split(" ");
//     data1.sort();
//     console.log(data1);

//     var current = '';
//     var cnt = 0;
//     for (var i = 0; i < data1.length; i++) {
//         if (data1[i] != current) {
//             if (cnt > 0) {
//                 console.log(current + ' comes --> ' + cnt + ' times');
//             }
//             current = data1[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         console.log(current + ' comes --> ' + cnt + ' times');
//     }

//   });

// var http=require('http');
// var fs=require('fs');


// var server=http.createServer((req,res)=>{
//     if(req.url === '/home' || req.url ===''){
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname +'/index.html','utf8').pipe(res);;
//     }
//     else if(req.url === '/index')
//     {
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname +'/home.html','utf8').pipe(res);
//     }
// });

// server.listen(3000,'127.0.0.1');
// console.log("server is listening on port 3000");


// var http=require('http');

// var server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end("Success")  ;
// });

// server.listen(3000,'127.0.0.1');
// console.log("server is listening on port 3000");


// const path = require('path');
// const fs = require('fs');
// //joining path of directory 
// const directoryPath = path.join(__dirname, '.');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });

// app.set('view engine','ejs');
// const express = require('express');
// const app = express();

// data:{[
//     {
//         id:1,
//         name:"Carrot",
//         price:200
//     },
//     {
//         id:2,
//         name:"Tomato",
//         price:2000
//     },
//     ]};	
    
    

// var bodyParser = require('body-parser')
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/items',function(req,res){
//     res.send(data.name);
// });

// app.post('/form',  urlencodedParser,  function(req,res){
//     console.log(req.body);
//     console.log(req.body.str);
//     var str2=req.body.str;
//     console.log(str2.length)
//     res.send({message:str2.length});
// });


// app.get('/new',(req,res)=>{
//     console.log("new");
//     res.send({message:"ALO ITHA"});
// })


// app.listen(3000);


// console.log(n);

// mongoose connection
// var express = require('express')
// var app = express();
// var mongoose=require('mongoose')
// // var book = require('./book')

// const connectionString = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/dp?retryWrites=true&w=majority';

    // const connector = mongoose.connect(connectionString,{
    //     useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true
    // });



// mongoose.connect(connectionString);

// mongoose.connection.on('connected',()=>{
//     var Schema=mongoose.Schema;

// var bookSchema = new Schema({
//     title: String,
//     author: String,
//     category: String
// });

//     var model = mongoose.model('book',bookSchema);
//     model.createCollection();

//     // const user =  new model({
//     //     title: 'title',
//     //     author: 'author',
//     //     category:'category'
//     //   });

//     // model.insertOne(myObj);
//     // user.save();
//     // model.find({title: "title"},(err,data)=>{
//     //     console.log(data);
//     // });
//     console.log('connected');
// });





// var port=3000;
// app.listen(port,()=>{
//     console.log("app started on port : " + port);
// })




// var http=require('http');
// var moment=require('moment');
// var strftime = require('strftime')
// var fs = require('fs');

// var server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     fs.readFile('sum.txt','utf8',(err,data)=>{
//        var data1 = data.split(" ");
//        var sum = parseInt(data1[0])+parseInt( data1[1]);
//        console.log(sum);
//        res.end("succes");

//     });
// });

// server.listen(3000,'127.0.0.1');
// console.log("server is listening on port 3000");

//ejs
// app.get('/',(req,res) => {
    //     res.render('home.ejs');
    // })

    //              ----------Adding items project --------------------

var express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const Item = require('./models/items');

const app = express();
const connection = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/abc?retryWrites=true&w=majority'
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



app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
app.set('view engine', 'ejs')

// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// parse application/json
// app.use(bodyParser.json())
// app.use(routes);

// app.get('/',(req,res) => {
    
//     res.render('home', {items});
// })

app.post('/items', bodyParser.urlencoded({ extended: false }),function(req,res){
    // var reqBody = req.body;
    // var reqB = req.body.toString();
    // reqBody = JSON.parse(reqB);
    const item ={
        name : req.body.item,
        price: req.body.price
    }
    console.log(item);
    Item.create(item)
    .then( (item) => {
        // res.send(item);
        Item.find({}).then( (items) => {
            // res.send(items)
            res.render('home',{items})
        })
    })
    console.log(req.body);
    // console.log(req.b);
    // console.log(req.body);
    // items.push({item: str1});
    // console.log(items);
    // res.render('home',{items})
    // console.log(str1);
    // res.send("succ")

})


app.get('/items', (req,res) => {
    Item.find({})
    .then( (items) => {
        res.render('home',{items})
    })
})

app.get('/items/:id',  (req,res) => {
    // for(let i=0;i<items.length;i++){
    //     if(items[i].id == req.params.id){
    //         console.log(items[i]);
    //         res.send(items[i]);
    //     }
    //     else{
    //         res.send('Element not found')
    //     }
    // }
     Item.findById(req.params.id)
    .then( (items) => {
        console.log(items)
        // res.render('home', {items});
        res.send(items)
        
    })
    // res.send('succ')

})

app.delete('/items/:id', (req,res) => {
    Item.findByIdAndRemove({_id: req.params.id})
    .then( (items) => {
        console.log(items + 'is deleted')
        res.send(items)
    })
})



port=8080;
app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
});


// const express = require('express')
// const app = express()
// const fs = require('fs')

// app.get('/',(req,res) => {
//     fs.readFile('sum.txt','utf8',(err,data) => {
//         console.log(data);
//         console.log(typeof(data));
//         const myJSON = JSON.parse(data);
//         console.log(typeof(myJSON));
//         res.send(myJSON);
        
//     })
// })


// port=8080;
// app.listen(port, () => {    
//     console.log(`Example app listening at http://localhost:${port}`)
// });


