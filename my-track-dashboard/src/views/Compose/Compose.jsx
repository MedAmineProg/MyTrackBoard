
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MessageService from '../../service/MessageService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'



const Compose = () => {

    const navigate=useNavigate()
    const [data,setData]=useState({})
  
  
    const onChangehandle=(e)=>{
      setData({
        // ... bich nbadlou e data
        ...data,
        [e.target.name]:e.target.value
      })
    }
  
  
  
  
  
    const onSubmitHandle=(e)=>{
      e.preventDefault()
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/inbox")
  
          MessageService.create(data).then(res=>{
            setData(res.data.data)
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
  return (
    <div class="wrapper"> {/* Content Wrapper. Contains page content */}
    <Navbar/>
    <Sidebar/>
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Compose</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Compose</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <form className="content" onSubmit={onSubmitHandle}>
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-1"></div>
        {/* /.col */}
        <div className="col-md-9">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">Compose New Message</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="form-group">
                <input className="form-control" placeholder="To:" name='par' onChange={onChangehandle}/>
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Subject:" name='title' onChange={onChangehandle}/>
              </div>
              <div className="form-group">
                <textarea id="compose-textarea" className="form-control" style={{height: 300}} placeholder="Write Your Message Here:"  name="description" onChange={onChangehandle}/>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <div className="float-right">
                <button type="submit" className="btn btn-primary"><i className="far fa-envelope" /> Send</button >
              </div>
              <button type="reset" className="btn btn-default"><i className="fas fa-times" /> Discard</button>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </form>
  {/* /.content */}
</div>
{/* /.content-wrapper */}
<Footer/>
</div>
  )
}

export default Compose