import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemandePService from '../../service/DemandePService'
import Swal from 'sweetalert2'
import moment from 'moment'

function Paiement() {
  const [Demande,setUsers]=useState([])

  const GetAll=()=>{
    DemandePService.getAll().then(res=>{
      console.log(res)
      setUsers(res.data.data)
    }).catch(error=>{
      console.log(error)
    })

  
  }
  

  useEffect(() => {
   
    GetAll()
  
  }, [])
  const onDelete=(id)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        DemandePService.remove(id).then(res=>{
          GetAll()
          
        })
        Swal.fire(
          'Deleted!',
          'Your Demande has been deleted.',
          'success'
        )
      }
    })
  
  }

  return (
    <div class="wrapper">    <div>     <Navbar/>
    <Sidebar/> {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Payment Requests List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Payment Requests List</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                  <th>ID</th>
                    <th>Type_Paie</th>
                    <th>Description</th>    
                    <th>Date_Depot</th>                
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {Demande.map((item,index)=>{
                  return(
                  <tr>
                    <td>{index}</td>

                    <td>{item.type_paie}</td>
                    <td>{item.description}</td>
                    <td>{moment(item.date_depot).format('LL')}</td>
                    <td class="project-state">
                    {/* <span className="badge badge-warning">{item.status}</span> */}
                    <span className='badge'>{item.status}</span>
                          {/* {button} */}
                      </td>
                    <td>
                    <Link to= {`/updatestatusPR/${item._id}`} class="btn btn-danger btn-sm" >
                          Refuser
                          </Link>
                          <Link to= {`/updatestatusP/${item._id}`} class="btn btn-success float-right btn-sm" >
                          Accepter
                          </Link>
                    </td>
                  </tr>
                  )})}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
  <Footer/>
</div></div>
  )
}

export default Paiement