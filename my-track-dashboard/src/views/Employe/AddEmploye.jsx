import React, { useState } from 'react'
import EmployeService from '../../service/EmployeService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'


const AddEmploye = () => {
  const [Employe,setEmploye]=useState([])
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
        navigate("/employe")

        EmployeService.create(data).then(res=>{
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
        <div class="wrapper"><Navbar/>
        <Sidebar/>
          {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Ajouter un Employé</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Ajouter un Employé</li>
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
            <div className="col-md-10">
              {/* Update Information elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Fill the form below</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={onSubmitHandle}>
              <div className="card-body">
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" className="form-control" placeholder="Enter name" name='nom' onChange={onChangehandle}/>
                </div>
                <div className="form-group">
                  <label >Prenom</label>
                  <input type="text" className="form-control"  placeholder="Enter lastname" name='prenom' onChange={onChangehandle}/>
                </div>                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={onChangehandle}/>
                </div>                <div className="form-group">
                  <label >Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={onChangehandle}/>
                </div>                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" className="form-control"  placeholder="Enter adresse" name='adresse' onChange={onChangehandle}/>
                </div>
                <div className="form-group">
                  <label >Téléphone</label>
                  <input type="number" className="form-control"  placeholder="Telephone" name='tel' onChange={onChangehandle}/>
                </div>
                <div className="form-group">
                  <label >Situation Familiale</label>
                  <input type="text" className="form-control"  placeholder="Situ Fam" name='situ_fam' onChange={onChangehandle}/>
                </div>
              </div>
              {/* /.card-body */}
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
    </div>
      )
    }
  

export default AddEmploye