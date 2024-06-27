import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeService from '../../service/EmployeService'
import Swal from 'sweetalert2'




function GetAllEmploye() {
  // const [famtype, setfamtype] = useState(["marié", "divorcé", "séparé", "célibataire ", "veuf "])
  // const Add = famtype.map(Add => Add
  // )
  // const handlefamTypeChange = (e) => {console.clear(), console.log((famtype[e.target.value]))}




const [searchTerm,setSearchTerm]=useState("")
const [employe,setUsers]=useState([])
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

  const GetAll=()=>{
    EmployeService.getAll().then(res=>{
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
        EmployeService.remove(id).then(res=>{
          GetAll()
          
        })
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
      }
    })
  
  }
  const [data,setData]=useState({})
  const [files,setfiles]=useState([])

  const onChangehandle=(e)=>{
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]:e.target.value
    })
  }


  const onSubmitHandle=(e)=>{
    e.preventDefault()
    setFormErrors(validate(data));
    setIsSubmit(true);
    const formdata = new FormData()
    for (let i = 0; i < files.length; i++) {
      formdata.append("file",files[i])
    }
    formdata.append("nom",data.nom)
    formdata.append("prenom",data.prenom)
    formdata.append("email",data.email)
    formdata.append("password",data.password)
    formdata.append("adresse",data.adresse)
    formdata.append("situ_fam",data.situ_fam)
    formdata.append("tel",data.tel)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
  
          EmployeService.create(formdata).then(res=>{
            setData(res.data.data)
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('Saved!', '', 'success')
          window.location.reload(false);
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
    
  }
  const onHandlefile=e=>{
    console.log(e)
    setfiles(e.target.files)
  
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nom) {
      errors.nom = "Firstname is required!";
    }
    if (!values.prenom) {
      errors.prenom = "Lastname is required!";
    }
    if (!values.situ_fam) {
      errors.situ_fam = "Situ Fam is required!";
    }
    if (!values.adresse) {
      errors.adresse = "Adress is required!";
    }
    if (!values.tel) {
      errors.tel = "Telephone is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };

  return (
    <div class="wrapper">     <Navbar/>
    <Sidebar/> {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Employees List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Employees List</li>
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
        <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search Here" name='nom' onChange={(event)=>{setSearchTerm(event.target.value);
                  }}/>
                </div>
          <div className="card">
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                  <th>ID</th>
                  <th>Image</th>                  
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Adresse</th>
                    <th>Situ Fami</th>
                    <th>Téléphone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {employe.filter((item)=>{
                  if (searchTerm == "") {
                    return item
                  } else if (item.nom.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.prenom.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.adresse.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.email.includes(searchTerm))  {
                    return item
                  } else if (item.tel.toString().includes(searchTerm.toString()))  {
                    return item
                  } else if (item.situ_fam.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  }
                }).map((item,index)=>{
                  return(
                  <tr>
                    <td>{index}</td>
                    <td  >
                      <div >{item.file && (
                    <img class="direct-chat-img" src={'http://localhost:5000/getImage/'+ item.file }
                    />
                  )}</div> </td>                    
                    <td>{item.nom}</td>
                    <td>{item.prenom}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.adresse}</td>
                    <td>{item.situ_fam}
                    </td>
                    <td>{item.tel}</td>
                    <td class="project-state">
                          <span class="badge badge-success">{item.loginStatus}</span>
                      </td>
                    <td>
                    <Link to= {`/updateemploye/${item._id}`} class="btn btn-info btn-sm" >
                              <i class="fas fa-pencil-alt">
                              </i>
                          </Link>
                          <a class="btn btn-danger btn-sm">
                              <i class="fas fa-trash"
                              onClick={()=>onDelete(item._id)}>
                              </i>
                          </a>
                    </td>
                  </tr>
                  )})}
                </tbody>
              </table>

            </div>
            {/* /.card-body */}
          </div>
          <div class="row">
        <div class="col-12">
        {/* <Link to='/addemploye' type="button" className='btn btn-success float-right' >
        Ajouter un employé
                </Link> */}
                <button type="button" className='btn btn-primary float-right' data-toggle="modal" data-target="#modal-lg">
                Ajouter un employé
                </button>
        </div>

<div className="modal fade" id="modal-lg">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
      </div>
      <div className="modal-body">
        <p>                <form onSubmit={onSubmitHandle}>
              <div className="card-body">

                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" className="form-control" placeholder="Enter name" name='nom' onChange={onChangehandle}/>
                  <p>{formErrors.nom}</p>
                </div>
                <div className="form-group">
                  <label >Prenom</label>
                  <input type="text" className="form-control"  placeholder="Enter lastname" name='prenom' onChange={onChangehandle}/>
                  <p>{formErrors.prenom}</p>
                </div>                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={onChangehandle} />
                  <p>{formErrors.email}</p>
                </div>                
                <div className="form-group">
                  <label >Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={onChangehandle}/>
                  <p>{formErrors.password}</p>
                </div>                
                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" className="form-control"  placeholder="Enter adresse" name='adresse' onChange={onChangehandle}/>
                  <p>{formErrors.adresse}</p>
                </div>
                <div className="form-group">
                  <label >Téléphone</label>
                  <input type="number" className="form-control"  placeholder="Telephone" name='tel' onChange={onChangehandle} />
                  <p>{formErrors.tel}</p>
                </div>
               <div className="form-group">
                  <label >Situation Familiale</label>
                  {/* <input type="text" className="form-control"  placeholder="Situ Fam" name='situ_fam' onChange={onChangehandle}/> */}
                  <select class="form-control" name='situ_fam' value={data.situ_fam} onChange={onChangehandle}>
                          <option></option>
                          <option name='situ_fam' value='marié'>Marié</option>
                          <option name='situ_fam' value='divorcé'>Divorcé</option>
                          <option name='situ_fam' value='séparé'>Séparé</option>
                          <option name='situ_fam' value='célibataire'>Célibataire</option>
                          <option name='situ_fam' value='veuf'>Veuf</option>
                        </select>
                        <p>{formErrors.situ_fam}</p>      
                </div>
                <div className="custom-file">
                      <input type="file" className="custom-file-input" id="exampleInputFile" value={data.file} name="file" onChange={onHandlefile}/>
                      <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                    </div>
              </div>
              {/* /.card-body */}
            <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form></p>
      </div>
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>


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

export default GetAllEmploye