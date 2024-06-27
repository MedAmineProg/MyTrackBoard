import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DocumentService from '../../service/DocumentService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router'
import { useEffect } from 'react'

const UpdateDoc = () => {
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
      formdata.append("type",data.type)
      formdata.append("description",data.description)
  
  
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/GetAlldoc")
          DocumentService.update(id,formdata).then(res=>{
  
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
  
      DocumentService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
   
  }, [])
  
    
    const onHandlefile = (e) =>{
      console.log(e)
      setfiles(e.target.files)
  
    }
  
  return (
    <div>    <div class="wrapper"><Navbar/>
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
            <form onSubmit={onSubmitHandle}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Type</label>
                  <select class="form-control" value={data.type} name='type' onChange={onChangehandle} >
                          <option></option>
                          <option name='type' value='Employé'>Employé</option>
                          <option name='type' value='Entreprise'>Entreprise</option>
                        </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <input type="text" className="form-control" placeholder="Description" value={data.description} name='description' onChange={onChangehandle}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">File input</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input multiple type="file" className="custom-file-input" name="file" onChange={onHandlefile}/>
                      <label className="custom-file-label" >Choose file</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right">Submit</button>
                <Link to="/getalldoc"  className="btn btn-primary">Documents List</Link>
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

export default UpdateDoc