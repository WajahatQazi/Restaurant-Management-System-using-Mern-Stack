import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import Layout from "../Components/Layout/Layout";
import "../Styles/Register.css"


export default function Registration() {
const [name,setname] = useState('')
const [email,setemail] = useState('')
const [password,setpassword] = useState('')
const history = useNavigate()

async function registerUser(event){
    event.preventDefault()
    
    const response = await fetch('http://localhost:3002/api/register',{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,

        }),
    })

    const data= await response.json()

    if(data.user){
   
      alert('You have successfully registered')
      history('/login')
    }
    else if(data.error){
      alert('Error in registration')
    }
    else{
      alert('User Already exists')
    }
      
    
    
}

  return (
    <Layout>
    <div className="Register">
    <div className='cont p-5 rounded bg-white'>
      
     <h1 style={{marginLeft:"80px"}}>
        Register
     </h1>
     <Form onSubmit={registerUser}>
     <div className="mb-2">
     <label style={{fontSize:"large"}}>Name</label>
        <input 
        style={{background:"aliceblue",margin:"30px",marginLeft:"85px"}}

        className="inregister"
        type='text' 
        placeholder='Name' 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        ></input>
        < br/>
</div>
<label style={{fontSize:"large"}}>Email</label>
        <input 
                style={{background:"aliceblue",margin:"30px",marginLeft:"90px"}}

        className="inregister"
        type='email' 
        placeholder='Email Address'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        ></input>
        < br/>

        <label style={{fontSize:"large"}}>Password</label>
        <input 
                style={{background:"aliceblue",margin:"30px",marginLeft:"55px"}}

        className="inregister"
        
        type='password' 
        placeholder='Choose a Password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}>
        </input>
        < br/>

        <div className="d-grid mt-2">
        <Button
        style={{marginTop:"20px"}}
         type='submit'>Submit</Button>
         </div>
     </Form>
     
    </div>
   </div>
   </Layout>
  )
}
