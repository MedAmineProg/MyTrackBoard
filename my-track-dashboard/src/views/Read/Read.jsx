import { Navigate, useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MessageService from "../../service/MessageService";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams } from "react-router";
import moment from "moment";

const Read = () => {
    const [data,setData]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()
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
            MessageService.remove(id).then(res=>{
              navigate("/inbox")
              
            })
            Swal.fire(
              'Deleted!',
              'Your employee has been deleted.',
              'success'
            )
          }
        })
      
      }

  
        useEffect(() => {
            MessageService.get(id).then(res=>{
                console.log(res)
                setData(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
        },[])

  return (
      
<div className="wrapper">  {/* Content Wrapper. Contains page content */}
    <Navbar />
    <Sidebar />
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
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        </div>

        {/* /.col */}
        <div className="col-md-8">
        <Link to='/inbox' className="btn btn-primary btn-block mb-3">Back to Inbox</Link>
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">Read Mail</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="mailbox-read-info">
                <h5>{data.title}</h5>
                <h6>From: {data.par}
                  <span className="mailbox-read-time float-right">{moment(data.time).format('lll')}</span></h6>
              </div>
              {/* /.mailbox-read-info */}
              {/* /.mailbox-controls */}
              <div className="mailbox-read-message">
                <p>{data.description}</p>
              </div>
              {/* /.mailbox-read-message */}
            </div>
            {/* /.card-footer */}
            <div className="card-footer">
              <div className="float-right">
                <Link to="/inbox" type="button" className="btn btn-default"><i className="fas fa-reply" /> Inbox</Link>
              </div>
              <button type="button" className="btn btn-default" onClick={()=>onDelete(id)}><i className="far fa-trash-alt" /> Delete</button>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

  <Footer/>
  </div>

  )
}

export default Read