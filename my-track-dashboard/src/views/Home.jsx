import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from "react-router-dom";
import Swal from 'sweetalert2';
import EmployeService from '../service/EmployeService';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MessageService from '../service/MessageService';
import DocumentService from '../service/DocumentService';
import DemandeService from '../service/DemandeService';
import DemandePService from '../service/DemandePService';
import { useNavigate } from 'react-router';

function Home() {

  const navigate=useNavigate()

  const onClickHandle=(e)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Choisir le type des Requests',
      showDenyButton: true,
      confirmButtonText: 'Leave',
      denyButtonText: `Payment`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/conge")
      } else if (result.isDenied) {
        navigate("/paiement")
      }
    })
  }


  const [Message, setMessage] = useState([]);

  const GetAllm = () => {
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
    GetAllm();
  }, []);

  const [employe,setUsers]=useState([])

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

    const [Document, setDocument] = useState([]);
  
    const GetAlld = () => {
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
      GetAlld();
    }, []);

    const [Demande,setDemande]=useState([])

    const GetAllc=()=>{
      DemandeService.getAll().then(res=>{
        console.log(res)
        setDemande(res.data.data)
      }).catch(error=>{
        console.log(error)
      })
  
    
    }
    
  
    useEffect(() => {
     
      GetAllc()
    
    }, [])

    const [DemandeP,setDemandeP]=useState([])

    const GetAllp=()=>{
      DemandePService.getAll().then(res=>{
        console.log(res)
        setDemandeP(res.data.data)
      }).catch(error=>{
        console.log(error)
      })
  
    
    }
    
  
    useEffect(() => {
     
      GetAllp()
    
    }, [])
    
  return (
      
    <div class="wrapper">
    <Navbar/>
    <Sidebar/>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Home</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Info boxes */}
<div className="row">
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>{Object.keys(Document).length}</h3>
        <p>Documents</p>
      </div>
      <div className="icon">
        <i className="ion ion-folder" />
      </div>
      <Link to='/getalldoc' className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>{Object.keys(Message).length}</h3>
        <p>Messages</p>
      </div>
      <div className="icon">
        <i className="ion ion-chatbubble" />
      </div>
      <Link to='/inbox' className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>{Object.keys(employe).length}</h3>
        <p>Employees</p>
      </div>
      <div className="icon">
        <i className="ion ion-person" />
      </div>
      <Link to = '/employe' className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>{Object.keys(DemandeP).length + Object.keys(Demande).length}</h3>
        <p>Requests</p>
      </div>
      <div className="icon">
        <i className="ion ion-document" />
      </div>
      <a href='#' className="small-box-footer" onClick={onClickHandle}>More info <i className="fas fa-arrow-circle-right" /></a>
    
    </div>
  </div>
  {/* ./col */}
</div>


        {/* /.row */}
        <div className="row">
          <div className="col-md-8">
          <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Employees List</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Télephone</th>
                      </tr>
                    </thead>
                    <tbody>
                    {employe.slice(0,3).map((item,index)=>{
                  return(
                      <tr>
                        <td>                      <div >{item.file && (
                    <img class="direct-chat-img" src={'http://localhost:5000/getImage/'+ item.file }
                    />
                  )}</div></td>
                        <td>{item.nom}</td>
                        <td>{item.prenom}</td>
                        <td><span className="badge badge-success">{item.tel}</span></td>
                      </tr>
                                        )})}
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <Link to='/employe' className="btn btn-sm btn-info float-right">View Complete List</Link>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-4">
        <div className="card">
              <div className="card-header">
                <h3 className="card-title">Latest Messages</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                {Message.slice(0,4).map((item,index)=>{
                  return(
                  <li className="item">
                    <div className="product-info">
                      <Link to ={`/read/${item._id}`} className="product-title">{item.title}
                        <span className="badge badge-info float-right">{item.par}</span></Link>
                      <span className="product-description">
                        {item.description}
                      </span>
                    </div>
                  </li>
                  )})}
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-center">
                <Link to='/inbox' className="uppercase">View Inbox</Link>
              </div>
              {/* /.card-footer */}
            </div>
        </div>
        </div>

        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <div className="col-md-4">
                {/* DIRECT CHAT */}
                <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Latest Documents</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>File</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Document.slice(0,3).map((item,index)=>{
                  return(
                      <tr>
                        <td>                                                      <a
                                  href={
                                    "http://localhost:5000/getImage/" +
                                    item.file
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.file}
                                </a></td>
                        <td>{item.type}</td>

                      </tr>
                                        )})}
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <Link to='/getalldoc' className="btn btn-sm btn-info float-right">View Complete List</Link>
              </div>
              {/* /.card-footer */}
            </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* USERS LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                    {employe.slice(0,8).map((item,index)=>{
                  return(
                      <li>
                        <div >{item.file && (
                    <img  style={{height: '55px',
                                  width: '55px'}   
} src={'http://localhost:5000/getImage/'+ item.file }
                    />
                  )}</div>
                        <a className="users-list-name" href="#">{item.nom}&nbsp;{item.prenom}</a>
                      </li>
                                                              )})}
                    </ul>
                    {/* /.users-list */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <Link to='/employe'>View All Users</Link>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/*/.card */}
              </div>
          {/* /.col */}
          <div className="col-md-4">

            {/* Info Boxes Style 2 */}
            <Link to='/compose' className="info-box mb-3 bg-maroon">
              <span className="info-box-icon"><i className="far fa-comment" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Compose a new message</span>
              </div>
              {/* /.info-box-content */}
            </Link>
            {/* /.info-box */}
            <Link to='/horaire' className="info-box mb-3 bg-gradient-success">
              <span className="info-box-icon"><i className="far fa-calendar-alt" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Events</span>
              </div>
              {/* /.info-box-content */}
            </Link>
            {/* /.info-box */}
            {/* /.info-box */}

            {/* /.info-box */}
{/* Calendar */}
{/* /.card */}

            {/* /.card */}
            {/* PRODUCT LIST */}

            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>{/*/. container-fluid */}
{/* /.card */}
<div className="card-body pt-0">
  {/*The calendar */}
  <div id="calendar" style={{width: '100%'}} />
</div>

    </section>
    {/* /.content */}
  
    </div>
  {/* /.content-wrapper */}
  <Outlet> </Outlet>

  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
  <Footer/>
</div>
  )
}

export default Home