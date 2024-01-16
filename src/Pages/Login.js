import React from 'react'
import '../Styles/Login.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {

  const history = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:3002/api/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({

        email,
        password,

      }),
    })
    
    const data =  await response.json()
    if (data.user) {
      alert('You are being logged in')
      history('/')
  }
    else {
      alert('Invalid Credentials')
            
    }

  }


  return (
    <Layout>
    <div className="Login vh-100">
       <div className='form_container p-5 rounded bg-white'>
      <h1 style={{marginLeft:"80px"}}>
        Login
      </h1>
      <Form onSubmit={loginUser}>

      <div className="mb-2">
         <label style={{fontSize:"large"}} >Email </label>
        <input 
        className='in'
        style={{background:"aliceblue",margin:"30px",marginLeft:"90px"}}
          type='text'
          placeholder='Email Adress'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        < br />
        </div>

        <div className="mb-2">
        <label style={{fontSize:"large"}} >Password</label>
        <input  className='in'
        style={{background:"aliceblue"}}
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}>
        </input>
        < br />
        </div>

        <div className="d-grid mt-2">
        <Button className="btn btn-primary"
        type='submit'>Submit</Button>
        </div>
      </Form>
    </div>
    </div>
    
    </Layout>
  )
}
