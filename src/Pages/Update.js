import React from "react";
import { Link } from "react-router-dom";

import LoginIcon from '@mui/icons-material/Login';
import Layout from "../Components/Layout/Layout";
import '../Styles/Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Update= () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [oldpassword, setoldpassword] = useState('')
  const [newpassword, setnewpassword] = useState('')
  const history = useNavigate()

  async function updateUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:3002/api/update', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        oldpassword,
        newpassword,

      }),
    })

    const data = await response.json()
    if(data.user){
      alert('Information Updated Successfully')
     history("./")
    }
    else{
      alert('Invalid Email or Password')
      window.location.reload()
    }

  }


    
    return (
        <Layout>
        <div className="Register vh-100">
           <div className='cont p-5 rounded bg-white'>
            <form onSubmit={updateUser}>
           
            <h2 style={{marginLeft:"25px",color:"black"}}>Update Information</h2>
            <div className="mb-2">
           <label style={{fontSize:"large"}}>Name</label>
            <input style={{background:"aliceblue",margin:"20px",marginLeft:"75px"}} 
            type="text" 
            placeholder="Change Name" 
             
            className="form-control"
            value={name}
          onChange={(e) => setname(e.target.value)}/>
            </div>
            
           

            <div className="mb-2">
           <label style={{fontSize:"large"}} >Email</label>
            <input style={{background:"aliceblue",margin:"20px",marginLeft:"80px"}} 
            type="text" 
            placeholder="Change Email" 
            required="true" 
            className="form-control"
            value={email}
          onChange={(e) => setemail(e.target.value)}/>
            </div>

            <div className="mb-2">
           <label style={{fontSize:"large"}} >Password</label>
            <input style={{background:"aliceblue",margin:"20px",marginLeft:"45px"}} 
            type="password" 
            placeholder="Old Password" 
            required="true" 
            className="form-control"
            value={oldpassword}
          onChange={(e) => setoldpassword(e.target.value)}/>
            </div>
            

         <div className="mb-2">
           <label style={{fontSize:"large"}} >Password</label>
            <input style={{background:"aliceblue",margin:"25px",margin:"20px",marginLeft:"45px"}} 
            type="password" 
            placeholder="New Password" 
            
            className="form-control"
            value={newpassword}
          onChange={(e) => setnewpassword(e.target.value)}/>
            </div>

       <div className="d-grid mt-2">
        <button 
        style={{marginTop:"2%"}}
        className="btn btn-primary">Update Information</button>

       </div>

      
             
            
          </form>  
        </div>
        </div>
        </Layout>
    );
};
export default Update;