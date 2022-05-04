const req = require('express/lib/request');
const res = require('express/lib/response');
const path=require('path');

const multer=require('multer');

const File=require('../models/file');
const{v4:uuidv4}=require('uuid');


let storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename:(req,file,cb)=>{

        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);


    },
});

let upload=multer({
storage,
limits:{fileSize:10000000*100},
}).single('myfile');



const router=require('express').Router();

router.post('/',(req,res) =>{
    


    //storing file
upload(req,res,async (err)=>{
    //validating the requesting
    if(!req.file){
        return res.json({error:'All fields are requires'})
    }
    
    if(err){
        return res.status(500).send({error:err.message})
    }
    
    //storing into database
 const file=new File({
     filename:req.file.filename,
     uuid:uuidv4(),
     path:req.file.path,
     size:req.file.size
 })

const response =await file.save();
return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`})
//example url--> http://localhost3000/files/366sygjdfysdvjy
});

    

    //response and link
})

module.exports=router;