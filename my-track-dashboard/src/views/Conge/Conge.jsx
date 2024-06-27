import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemandeService from '../../service/DemandeService'
import Swal from 'sweetalert2'
import moment from 'moment'
import classNames from 'classnames'

function GetAllDemande() {


  const [Demande,setUsers]=useState([])
  // const [data,setData]=useState({})
  // const [isAccepted,setAccept]=useState(false)
  // const onClickAccept=()=>{
  // setAccept(!isAccepted)
  
  // }



  // var button = <span class="badge badge-warning">Pending</span>;
  // if (CLICK) {
  //   button =  <span class="badge badge-warning">Accepted</span> ;
  // } else if(CLICK == false) {
  //   button =  <span class="badge badge-warning">Refused</span>;
  // }
  

  const GetAll=()=>{
    DemandeService.getAll().then(res=>{
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
        DemandeService.remove(id).then(res=>{
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

  // const HandleClickAccept=()=>{
  //   setData({
  //     // ... bich nbadlou e data
  //     ...data,
  //     status: "Accepted"
  //   })
  //   this.setState({isAccepted: true});

  //   const isAccepted = this.state.isAccepted;
  //   let button;
  //   if (isAccepted) {
  //     button =<span class="badge badge-warning">Accepted</span>
  //   } else {
  //     button =<span class="badge badge-warning">Refused</span>
  //   }
    
  
  // }
  // const HandleClickRefuse=()=>{
  //   setData({
  //     // ... bich nbadlou e data
  //     ...data,
  //     status: "Refused"
  //   })
  //   this.setState({isAccepted: false});
  //   const isAccepted = this.state.isAccepted;

  //   if (isAccepted) {
  //   button =<span class="badge badge-warning">Accepted</span>
  //   } else {
  //   button =<span class="badge badge-warning">Refused</span>
  //   }
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Save',
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       navigate("/conge")
  //       DemandeService.update(id,data).then(res=>{
  //         console.log(res)
  //       }).catch(err=>{
  //         console.log(err)
  //       })
  //       Swal.fire('Saved!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //     }
  //   })

  // }


  return (
    <div class="wrapper">     <Navbar/>
    <Sidebar/> {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Leave Requests List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Leave Requests List</li>
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
                    <th>Type_Conge</th>
                    <th>Description</th>    
                    <th>Date_Debutconge</th>                
                    <th>Date_Finconge</th>
                    <th>Duree_Conge</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {Demande.map((item,index)=>{
                  return(
                  <tr>
                    <td>{index}</td>

                    <td>{item.type_conge}</td>
                    <td>{item.description}</td>
                    <td>{moment(item.date_debutconge).format('LL')}
                    </td>
                    <td>{moment(item.date_finconge).format('LL')}</td>
                    <td>{item.duree_conge}</td>
                    <td class="project-state">
                    {/* <span className="badge badge-warning">{item.status}</span> */}
                    <span className={classNames('badge',)}>{item.status}</span>
                          {/* {button} */}
                      </td>
                    <td>
                          <Link to= {`/updatestatusR/${item._id}`} class="btn btn-danger btn-sm" >
                          Refuser
                          </Link>
                          {/* <a class="btn btn-success float-right btn-sm" onClick={HandleClickAccept}> */}
                          {/* <a class="btn btn-success float-right btn-sm">
                              Accepter
                          </a> */}
                          <Link to= {`/updatestatus/${item._id}`} class="btn btn-success float-right btn-sm" >
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
</div>
  )
}

export default GetAllDemande