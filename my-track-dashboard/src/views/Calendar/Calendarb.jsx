import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "react-datetime/css/react-datetime.css";
import { useState } from "react";
import AddEvent from "./AddEvent";
import moment from "moment";
import http from "../../service/AxiosContext";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
export const StyleWrapper = styled.div`
  a .calend {
    color: white;
  }
`;

// const onEventDeleted=(id)=>{

//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085D6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       EmployeService.remove(id).then(res=>{
//         GetAll()
        
//       })
//       Swal.fire(
//         'Deleted!',
//         'Your employee has been deleted.',
//         'success'
//       )
//     }
//   })

// }

const Calendarb = () => {
  const [ModalOpen, setModal] = useState(false);
  const [events, setEvents] = useState();
  const calendarRef = useRef(null);
  const OnEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };
  async function handleEventAdd(data) {
    await http.post("/calendar/create", data.event);
  }
  async function handleDateSet(data) {
    const response = await http.get(
      "/calendar/getdate?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );
    setEvents(response.data);
  }
  // async function onEventDeleted(data,id) {
  //   const event = data.getEventById(id)
  //   await http.delete(`/calendar/deletedate/${event}`,event);
    
  // }

  return (
    // <div>
    //     <button onClick={()=> setModal(true)}>add event</button>
    //     <div style={{position: "relative", zIndex: 0}}>
    //     <FullCalendar
    //     ref={calendarRef}
    //     events={events}
    //     plugins={[ dayGridPlugin ]}
    //     initialView="dayGridMonth"
    //     eventAdd={(event) => handleEventAdd(event)}
    //     datesSet={(date)=>handleDateSet(date)}
    //     />
    //     </div>
    // <AddEvent isOpen={ModalOpen} onClose={()=> setModal(false)} OnEventAdded={(event => OnEventAdded(event))}/>
    // </div>
    <div class="wrapper">
      {" "}
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Calendar</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Calendar</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-9">
                <div className="card card-primary">
                  <div className="card-body p-0 dddddddd">
                    {/* <button onClick={()=> setModal(true)}>add event</button> */}
                    <div style={{ position: "relative", zIndex: 0 }}>
                      <StyleWrapper>
                        <FullCalendar
                          ref={calendarRef}
                          events={events}
                          plugins={[dayGridPlugin]}
                          initialView="dayGridMonth"
                          eventAdd={(event) => handleEventAdd(event)}
                          datesSet={(date) => handleDateSet(date)}
                          // editable
                          // selectable
                          // eventClick={(id)=> onEventDeleted(id)}
                        />
                      </StyleWrapper>
                    </div>
                    <AddEvent
                      isOpen={ModalOpen}
                      onClose={() => setModal(false)}
                      OnEventAdded={(event) => OnEventAdded(event)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-success float-right"
                  onClick={() => setModal(true)}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Calendarb;
