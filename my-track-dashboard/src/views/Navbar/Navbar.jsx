import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import LoginService from '../../service/LoginService'
import { useState } from 'react'

function Navbar() {
  const [data,setData] = useState({
  })
  
  console.log(data)

  const navigate=useNavigate()

  const onClickHandle=(e)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to log out?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        LoginService.logout(data).then(res=>{
  
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        navigate("/login")
      } else if (result.isDenied) {
        Swal.fire('Cancelled', '', 'info')
      }
    })
  }
  return (
    <div>  {/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-dark">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <Link to ="/" className="nav-link">Home</Link>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}

    {/* Notifications Dropdown Menu */}
    <li className="nav-item dropdown">
      <Link to='/inbox' className="nav-link">
        <i className="far fa-bell" />
      </Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" role="button" onClick={onClickHandle}>
        Logout
      </a>
    </li>
  </ul>
</nav>
{/* /.navbar */}
</div>
  )
}

export default Navbar