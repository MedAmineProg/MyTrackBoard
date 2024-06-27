
import Home from "./views/Home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import GetAllEmploye from "./views/Employe/GetAllEmploye";
import Conge from "./views/Conge/Conge";
import Paiement from "./views/Paiement/Paiement";
import Inbox from "./views/Inbox/Inbox";
import Login from "./views/Login/Login";
import "./App.css";
// import AddEmploye from "./views/Employe/AddEmploye";
import UpdateEmploye from "./views/Employe/UpdateEmploye";
import GetAllDocument from "./views/Document/GetAllDoc";
import Compose from "./views/Compose/Compose";
import UpdateDoc from "./views/Document/UpdateDoc";
import UpdateStatus from "./views/Conge/UpdateStatus";
import Modal from "react-modal/lib/components/Modal";
import UpdateStatusR from "./views/Conge/UpdateStatusR";
import Calendarb from "./views/Calendar/Calendarb";
import Read from "./views/Read/Read";
import UpdateStatusP from "./views/Paiement/UpdateStatusP";
import UpdateStatusPR from "./views/Paiement/UpdateStatusPR";
import Error from "./views/Error/Error";

Modal.setAppElement('#root');


function App() {
  const PrivateRoute = ({auth : {isAuthenticated}, children})=>{
    return isAuthenticated ? children : <Navigate to="/login"/>;
  }




  return (
    <div className="App">
             <BrowserRouter>
             <Routes>
             <Route index path="/login" element={<Login/>} />
             <Route path="/" element={<PrivateRoute auth={{ isAuthenticated: true }}><Home /></PrivateRoute>}>
        </Route>
        <Route path="*" element={<Error/>} />
        <Route index path="/employe" element={<GetAllEmploye/>} />
          <Route index path="/horaire" element={<Calendarb/>} />
          <Route index path="/conge" element={<Conge/>} />
          <Route index path="/updatestatus/:id" element={<UpdateStatus/>} />
          <Route index path="/updatestatusR/:id" element={<UpdateStatusR/>} />
          <Route index path="/updatestatusP/:id" element={<UpdateStatusP/>} />
          <Route index path="/updatestatusPR/:id" element={<UpdateStatusPR/>} />
          <Route index path="/paiement" element={<Paiement/>} />
          <Route index path="/getalldoc" element={<GetAllDocument/>} />
          <Route index path="/inbox" element={<Inbox/>} />
          <Route index path="/compose" element={<Compose/>} />
          <Route index path="/read/:id" element={<Read/>} />
          {/* <Route index path="/addemploye" element={<AddEmploye/>} /> */}
          <Route index path="/updateemploye/:id" element={<UpdateEmploye/>} />
          <Route index path="/updatedoc/:id" element={<UpdateDoc/>} />

     
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;

