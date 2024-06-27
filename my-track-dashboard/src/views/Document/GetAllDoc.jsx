import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DocumentService from "../../service/DocumentService";
import Swal from "sweetalert2";


function GetAllDocument() {
  const [Document, setDocument] = useState([]);
  const [searchTerm,setSearchTerm]=useState("")

  const GetAll = () => {
    DocumentService.getAll()
      .then((res) => {
        console.log(res);
        setDocument(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAll();
  }, []);
  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DocumentService.remove(id).then((res) => {
          GetAll();
        });
        Swal.fire("Deleted!", "Your employee has been deleted.", "success");
      }
    });
  };

  const [data, setData] = useState({});
  const [files, setfiles] = useState([]);

  const onChangehandle = (e) => {
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const formdata = new FormData();
  for (let i = 0; i < files.length; i++) {
    formdata.append("file", files[i]);
  }
  formdata.append("type", data.type);
  formdata.append("description", data.description);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        DocumentService.create(formdata)
          .then((res) => {
            setData(res.data.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Saved!", "", "success");
        window.location.reload(false);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const onHandlefile = (e) => {
    console.log(e);
    setfiles(e.target.files);
  };

  return (
    <div class="wrapper">
      {" "}
      <Navbar />
      <Sidebar /> {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Documents List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">
                    Documents List
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
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
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>File</th>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Document.filter((item)=>{
                  if (searchTerm == "") {
                    return item
                  } else if (item.file.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.type.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.description.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  }
                }).map((item, index) => {
                          return (
                            <tr>
                              <td>{index}</td>
                              <td>
                                <a
                                  href={
                                    "http://localhost:5000/getImage/" +
                                    item.file
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.file}
                                </a>
                                {/* {item.file && (
                    <img  style={{ height: "100px" }} src={'http://localhost:5000/getImage/'+ item.file }
                    />
                  )} */}
                              </td>
                              <td>{item.type}</td>
                              <td>{item.description}</td>
                              <td>
                                <Link
                                  to={`/updatedoc/${item._id}`}
                                  class="btn btn-info btn-sm"
                                >
                                  <i class="fas fa-pencil-alt"></i>
                                </Link>
                                <a class="btn btn-danger btn-sm">
                                  <i
                                    class="fas fa-trash"
                                    onClick={() => onDelete(item._id)}
                                  ></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
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
                    <button
                      type="button"
                      className="btn btn-primary float-right"
                      data-toggle="modal"
                      data-target="#modal-lg"
                    >
                      Ajouter un doument
                    </button>
                  </div>
                  <div className="modal fade" id="modal-lg">
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header"></div>
                        <div className="modal-body">
                          <p>
                            {" "}
                            <form onSubmit={onSubmitHandle}>
                              <div className="card-body">
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Type
                                  </label>
                                  {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter type" value={data.type} name='type' onChange={onChangehandle}/> */}
                                  <select
                                    class="form-control"
                                    value={data.type}
                                    name="type"
                                    onChange={onChangehandle}
                                  >
                                    <option></option>
                                    <option name="type" value="Employé">
                                      Employé
                                    </option>
                                    <option name="type" value="Entreprise">
                                      Entreprise
                                    </option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Description"
                                    value={data.description}
                                    name="description"
                                    onChange={onChangehandle}
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputFile">
                                    File input
                                  </label>
                                  <div className="input-group">
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="exampleInputFile"
                                        value={data.file}
                                        name="file"
                                        onChange={onHandlefile}
                                      />
                                      <label
                                        className="custom-file-label"
                                        htmlFor="exampleInputFile"
                                      >
                                        Choose file
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /.card-body */}
                              <div className="modal-footer justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-default"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </p>
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
      {/* /.content-wrapper */}{" "}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
      <Footer />
    </div>
  );
}

export default GetAllDocument;
