
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import DemandePService from '../../service/DemandePService'



const UpdateStatusPR = () => {
    const navigate=useNavigate()
  
    const [data,setData]=useState({})
    const {id}=useParams()
  
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
  
      })
      
    }
   


    const onAcceptHandle=(e)=>{
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
          navigate("/paiement")
          DemandePService.update(id,data).then(res=>{
  
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
  
  
  useEffect(() => {
  
      DemandePService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
   
  }, [])
  return (
    <div> <div class="wrapper"><Navbar/>
    <Sidebar/>
      {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Update Information</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Update Information</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {/* Update Information elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter un document</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={onAcceptHandle}>
              <div className="card-body">
              <div className="form-group">
                  <label >Change the status to "Accepted" to confirm your choice</label>
                  {/* <input type="text" className="form-control"  placeholder="Situ Fam" name='situ_fam' onChange={onChangehandle}/> */}
                  <select class="form-control" name='status' value={data.status} onChange={onChangehandle} >
                          <option name='status' value='Pending'>Pending</option>
                          <option name='status' value='Accepted'>Accepted</option>
                        </select>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right">Confirm</button>
                <Link to="/conge"  className="btn btn-primary">List of offers</Link>
              </div>
            </form>
          </div>
          {/* /.card */}
          
      </div>
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}
<Footer/>
</div></div>
  )
}

export default UpdateStatusPR