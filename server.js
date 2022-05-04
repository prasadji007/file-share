const express=require('express');
const app=express();
const cors=require('cors');

const PORT=process.env.PORT || 3000;
const path=require('path');

app.use(express.static('public'));
//cloud based mongodb

const connectDB=require('./config/db');
connectDB();
//cors
const corsOptions={
    origin:process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions));

//template engine

app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

//routes


app.use('/api/files',require('./routes/files'));

app.use('/files',require('./routes/show'));

app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})