import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MessageService from "../../service/MessageService";
import Swal from "sweetalert2";
import { useEffect } from "react";
import moment from 'moment'

const Inbox = () => {

  
  const [searchTerm,setSearchTerm]=useState("")
  const [Message, setMessage] = useState([]);

  const GetAll = () => {
    MessageService.getAll()
      .then((res) => {
        console.log(res);
        setMessage(res.data.data);
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
        MessageService.remove(id).then((res) => {
          GetAll();
        });
        Swal.fire("Deleted!", "Your employee has been deleted.", "success");
      }
    });
  };

  return (
    <div class="wrapper">
      <Navbar />
      <Sidebar />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Inbox</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Inbox</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-12">
            <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search Here" name='nom' onChange={(event)=>{setSearchTerm(event.target.value);
                  }}/>
                </div>
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">Inbox</h3>
                  <div className="card-tools">
                  </div>
                  {/* /.card-tools */}
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <div className="table-responsive mailbox-messages">
                    <table className="table table-hover table-striped">
                      <tbody>
                        {Message.filter((item)=>{
                  if (searchTerm == "") {
                    return item
                  } else if (item.par.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (item.description.toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } else if (moment(item.time).format('lll').toLowerCase().includes(searchTerm.toLowerCase()))  {
                    return item
                  } 
                }).map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                <button type="button" className="btn btn-default btn-sm" onClick={()=>onDelete(item._id)}>
                        <i className="far fa-trash-alt" />
                      </button>
                                </div>
                              </td>
                              <td className="mailbox-name">
                                <Link to= {`/read/${item._id}`}>{item.par}</Link>
                              </td>
                              <td className="mailbox-subject">
                                <b>{item.title} </b> 
                                {item.description.length >60
                                  ? `${item.description.substring(0, 60)}...`
                                  : item.description}
                              </td>
                              <td className="mailbox-attachment" />
                              <td className="mailbox-date">{moment(item.time).format('lll')}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    
                    {/* /.table */}
                  </div>
                  {/* /.mail-box-messages */}
                </div>
                {/* /.card-body */}
                <div className="card-footer p-0">
                </div>
              </div>
              {/* /.card */}
            </div>
            <div class="col-12">
        <Link to='/compose' type="button" className='btn btn-success float-right' >
        Compose
                </Link>
        </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <Footer />

    </div>
  );
};

export default Inbox;
