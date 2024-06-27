import React from 'react'
import LoginService from '../../service/LoginService'
import { useState } from 'react'

const Login = () => {
const [data,setData] = useState({
  email:"",
  password:""
})

const [error,setError] = useState("")

console.log(data)
const handleChange = ({currentTarget:input})=>{
  setData({...data,[input.name]:input.value})
}
const handleSubmit = (e)=>{
e.preventDefault()
LoginService.create(data)
.then(res=>{
console.log(res)
window.location="/"
}).catch(error=>{
  console.log(error)
  if (error.response && error.response.status>=400 && error.response.status<=500) {
    setError(error.response.data.message)
  }
})
}
  return (
   <div class="hold-transition login_page"><div className="login-box">
    <div className="login-logo">
      <b>MyTrack</b>BOARD
    </div>
    {/* /.login-logo */}
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" required  name="email" value={data.email} onChange={handleChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" required name="password" value={data.password} onChange={handleChange}/>

            <div>            { error && <div>{error}</div>}</div>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
            {/* /.col */}
          </div>
        </form>
        {/* /.social-auth-links */}

      </div>
      {/* /.login-card-body */}
    </div>
  </div>
  {/* /.login-box */}</div>

  )
}

export default Login