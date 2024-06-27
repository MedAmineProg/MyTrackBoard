import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeService from '../../service/EmployeService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router'
import { useEffect } from 'react'

const UpdateEmploye = () => {
  const navigate=useNavigate()

  const [data,setData]=useState({})
  const {id}=useParams()
  const [files,setfiles]=useState([])
  
  const onChangehandle=(e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const onSubmitHandle=(e)=>{
    e.preventDefault()
    const formdata = new FormData()
    for (let i = 0; i < files.length; i++) {
      formdata.append("file",files[i])
    }
    formdata.append("nom",data.nom)
    formdata.append("prenom",data.prenom)
    formdata.append("email",data.email)
    formdata.append("adresse",data.adresse)
    formdata.append("situ_fam",data.situ_fam)
    formdata.append("tel",data.tel)
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
        EmployeService.update(id,formdata).then(res=>{
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
    EmployeService.get(id).then(res=>{
        console.log(res)
        setData(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
},[])

const onHandlefile=(e)=>{
  console.log(e)
  setfiles(e.target.files)

}
  return (
    <div class="wrapper">        <div><Navbar/>
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
        <div className="col-md-7">
          {/* Update Information elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Modify Here</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={onSubmitHandle}>
          <div className="card-body">
            <div className="form-group">
              <label>Nom</label>
              <input type="text" className="form-control" placeholder="Enter name" name='nom' value={data.nom}  onChange={onChangehandle}/>
            </div>
            <div className="form-group">
              <label >Prenom</label>
              <input type="text" className="form-control"  placeholder="Enter lastname" name='prenom' value={data.prenom}  onChange={onChangehandle}/>
            </div>                <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" name='email' value={data.email}  onChange={onChangehandle}/>
            </div>                
            {/* <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="Enter password" name='password' value={data.password}  onChange={onChangehandle}/>
            </div>             */}
                <div className="form-group">
              <label>Adresse</label>
              <input type="text" className="form-control"  placeholder="Enter adresse" name='adresse' value={data.adresse} onChange={onChangehandle}/>
            </div>
            <div className="form-group">
              <label >Téléphone</label>
              <input type="number" className="form-control"  placeholder="Telephone" name='tel' value={data.tel} onChange={onChangehandle}/>
            </div>
            <div className="form-group">
              <label >Situation Familiale</label>
              <select class="form-control" name='situ_fam' value={data.situ_fam} onChange={onChangehandle} >
                          <option></option>
                          <option name='situ_fam' value='marié'>Marié</option>
                          <option name='situ_fam' value='divorcé'>Divorcé</option>
                          <option name='situ_fam' value='séparé'>Séparé</option>
                          <option name='situ_fam' value='célibataire'>Célibataire</option>
                          <option name='situ_fam' value='veuf'>Veuf</option>
                        </select>
{/* <input type="text" className="form-control"  placeholder="Situ Fam" name='situ_fam' value={data.situ_fam} onChange={onChangehandle}/> */}
            </div>
            <div className="form-group">
              <label >Image</label>
            <div className="custom-file">

                      <input type="file" className="custom-file-input" id="exampleInputFile" name="file" onChange={onHandlefile}/>
                      <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                    </div></div>
          </div>
          {/* /.card-body */}
        <div className="modal-footer justify-content-between">
    <button type="submit" className="btn btn-primary">Submit</button>
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

</div>
<Footer/>
</div>
  )
}

export default UpdateEmploye