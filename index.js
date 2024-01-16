
const express = require("express");
const connection=require("./connection.js");
const postModel = require("./Model/postModel.js");
const app = express();
const cors=require("cors");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcryptjs")
var passwordHash = require('password-hash');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json());

app.post('/api/register',  async(req, res) => {
  console.log(req.body);
  const encryptedPassword=await bcrypt.hash(req.body.password, 10);
const  email = req.body.email;
if (!(email && req.body.name && req.body.password )) {
  return res.status(400).json({status: 'error', user:false})
}

const oldUser = await postModel.findOne({ email });

    if (oldUser) {
      return res.json({status:'error', user:false})
    }
    else{
  
  try{

   const user= await postModel.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
     
    })
    
    return res.json({status:'ok', user})
  }
  catch(err){
    res.json({status:'error', error:'something wrong'} );
  }
}
})


app.post('/api/login',  async(req, res) => {
  console.log(req.body);
 
  const password=req.body.password;
   const user= await postModel.findOne({
     
      email: req.body.email,
     // password:req.body.password,
 
    })

    if(!user){
      res.json({status:'error', user:false})
    }
 
  
  if(user){
    const passwordValidator=await bcrypt.compareSync(req.body.password, user.password)
    if (passwordValidator){
     
      
    // && ( await bcrypt.compare(password, user.password))){
    const Token= jwt.sign(
    {
        
        email: user.email,
        password: user.password,
        
      },
       "secret",(err, token) => {
        if (err) {console.log( err)}
        else{
        //return res.json({status:'ok', user:token})
       console.log(token)
       user.token=token;
        }
      })
     
      

      console.log('user found')
      return res.json({status:'ok', user:user})
      //
      //res.json('recordFound')
      
    }
    
    else {
   
      res.json({status:'error', user:false})
    
      console.log('user not found')
    //  console.log(user.password)
    }
  }
    })

app.post('/api/verify', verifyToken, async(req, res) => {
 
  res.status(200).send("Welcome 🙌 ");
   /* if (err) {
          res.send({result:"invalid Token"});
        }
        else {
        res.json({result:"valid Token",
      decoded})
        }*/
  })



function verifyToken(req, res, next) {
  const token =
  req.body.token || req.query.token || req.headers["auth-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
    try{
      const decoded=jwt.verify(token, 'secret')
      req.user=decoded;
  }
  catch(err){
      res.sendStatus({result:"invalid Token"});
    }
  return next();
 }



 app.post('/api/update', async(req, res) => {
  const{id}=req.params;
  //const{name,email,oldpassword,newpassword} = req.body;
  const newpasswordhash=await bcrypt.hash(req.body.newpassword, 10);
  const userdata=await postModel.findOne({
    email:req.body.email,
 
});
  if(userdata && await bcrypt.compare(req.body.oldpassword, userdata.password)){
    console.log('User Found')
    const upd=await postModel.findByIdAndUpdate(userdata._id,
      {
        name:req.body.name,
        email:req.body.email,
        password:newpasswordhash,
      })
      return res.json({status:'ok', user:upd})

  }
   
  else{
      console.log('User Not Found')
      console.log(req.body)
      return res.json({status:'error', user:false})
    }}
 )

//module.exports=verifyToken



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3002, '0.0.0.0' () => {
  console.log("Listening at port 3002");
});