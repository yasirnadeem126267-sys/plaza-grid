import React, { useState } from 'react'
import style from './AdminLogin.module.css'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
function AdminLogin() {
  const [emails, demail]= useState(["Yasir@gmail.com"])
  const  [passwords, dpasswords]= useState(["12346"]);
  const navigat= useNavigate();
  function handel(e){
    e.preventDefault();
    if(emails=="Yasir@gmail.com" && passwords=="123456"){
        navigat('/dashboard')
    }else{
      console.log("Please Enter correct credentials");
    }
   
  }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="Admin-login.css" />
  <style dangerouslySetInnerHTML={{ __html: "\n\n" }} />
  <div className="container mt-4 main">
    <div className="row">
      {/* { Left-Side } */}
      <div className={`col-lg-6 ${style['left-side']}`}>
        <h4 className="mb-5 p-5" style={{ fontSize: 28 }}>
          {" "}
          <span style={{ color: "white" }}>Plaza</span>{" "}
          <span style={{ color: "#f58220" }}>Grid</span>
        </h4>
        {/*Center-text  */}
        <div className="mt-5 p-5">
          <h2 style={{ color: "white" }}>Admin Panel</h2>
          <p style={{ color: "white" }} className={`${style.font}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero et,
            aliquid hic veniam aspernatur sed aliquam ipsa beatae autem
            reiciendis necessitatibus!
          </p>
        </div>
        <p style={{ color: "white" }} className={` mt-5 ps-5 pb-5 ${style.font}`}>
          All rights are reserved by plazaGrid
        </p>
      </div>
      {/* Right side */}
      <div className={`col-lg-6 ${style['form-parent']} mt-lg-0 mt-sm-3`}>
        <form action="" className="p-4 border rounded " onSubmit={handel}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Admin Login</h4>
            <p>Enter Your Credentails to access the admin panel</p>
          </div>
          {/* input fields  */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              id="emial"
              className="form-control"
              onChange={(e)=>demail(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Passwrod
            </label>
            <input
              type="text"
              placeholder="Enter Your Password"
              className="form-control"
              id="password"
              onChange={(e)=>dpasswords(e.target.value)}
            />
          </div>
          {/* Remember and Forgot */}
          <div style={{ display: "flex" }}>
            <p className="m-auto">Remember me</p>
            <p className={`${style['forgot-password']} m-auto`}>Forgot Password?</p>
          </div>
          {/* submit button and back*/}
         <div>
          
           <button className="  mt-2 w-100 btn btn-light" type='submit'>Login</button>
          
           
           
          <Link to="/home"   className='btn btn-danger'>Back to Webiste</Link>
        </div>
        </form>
      </div>
    </div>
  </div>
 
  
</>

  )
}

export default AdminLogin;