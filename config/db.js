// require('dotenv').config();
// const mongoose=require('mongoose');


// //Database Connection
// function connectDB(){
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, 
//     useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
   
//     const connection=mongoose.connection;  
    
//     connection.once('open',()=>{
//         console.log('Database Connected');
//     }).catch(err=>{
//         console.log('connection failed');
//     })
// }

// module.exports=connectDB;

require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {

    const MONGO_CONNECTION_URL="mongodb+srv://FileShare:9931287882@cluster0.ucg9k.mongodb.net/fileshare?retryWrites=true&w=majority";
    // Database connection 🥳
    mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true, 

useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected ');
    }).on('error',function(e) {
        console.log('Connection failed ');
    })
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;