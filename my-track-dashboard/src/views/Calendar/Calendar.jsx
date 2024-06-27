import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import $ from 'jquery';
import AddEvent from './AddEvent';
const fullcalendar = require="fullcalendar"


function Calendar() {


  

  return (
    
    <div class="wrapper">
       <Navbar/>
    <Sidebar/> {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Calendar</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Calendar</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="sticky-top mb-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Draggable Events</h4>
              </div>
              <div className="card-body">
                {/* the events */}
                <div id="external-events">
                  <div className="external-event bg-success">Lunch</div>
                  <div className="external-event bg-warning">Go home</div>
                  <div className="external-event bg-info">Do homework</div>
                  <div className="external-event bg-primary">Work on UI design</div>
                  <div className="external-event bg-danger">Sleep tight</div>
                  <div className="checkbox">
                    <label htmlFor="drop-remove">
                      <input type="checkbox" id="drop-remove" />
                      remove after drop
                    </label>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Create Event</h3>
              </div>
              <div className="card-body">
                <div className="btn-group" style={{width: '100%', marginBottom: 10}}>
                  <ul className="fc-color-picker" id="color-chooser">
                    <li><a className="text-primary" href="#"><i className="fas fa-square" /></a></li>
                    <li><a className="text-warning" href="#"><i className="fas fa-square" /></a></li>
                    <li><a className="text-success" href="#"><i className="fas fa-square" /></a></li>
                    <li><a className="text-danger" href="#"><i className="fas fa-square" /></a></li>
                    <li><a className="text-muted" href="#"><i className="fas fa-square" /></a></li>
                  </ul>
                </div>
                {/* /btn-group */}
                <div className="input-group">
                  <input id="new-event" type="text" className="form-control" placeholder="Event Title" />
                  <div className="input-group-append">
                    <button id="add-new-event" type="button" className="btn btn-primary">Add</button>
                  </div>
                  {/* /btn-group */}
                </div>
                {/* /input-group */}
              </div>
            </div>
          </div>
        </div>
        {/* /.col */}
        <div className="col-md-9">
          <div className="card card-primary">
            <div className="card-body p-0">
            <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
            <input placeholder='Title' value={title} onChange={event => setTitle(event.target.value)} />
            <div>
                <label>Start Date</label>
            <DateTime value={start} onChange={date => setStart(date)} />

            </div>
            <div>
                <label>End Date</label>
            <DateTime value={end} onChange={date => setEnd(date)} />

            </div>
            <button>Add Event</button>
            </form>

        </Modal>
            </div>
            {/* /.card-body */}
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
{/* /.content-wrapper */}

<Footer/>
<script src="../plugins/moment/moment.min.js"></script>
<script src="../plugins/fullcalendar/main.js"></script>
</div>

  )
}
$(function () {

  /* initialize the external events
   -----------------------------------------------------------------*/
  function ini_events(ele) {
    ele.each(function () {

      // create an Event Object (https://fullcalendar.io/docs/event-object)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      }

      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject)

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex        : 1070,
        revert        : true, // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      })

    })
  }

  ini_events($('#external-events div.external-event'))

  /* initialize the calendar
   -----------------------------------------------------------------*/
  //Date for the calendar events (dummy data)
  var date = new Date()
  var d    = date.getDate(),
      m    = date.getMonth(),
      y    = date.getFullYear()

  var Calendar = fullcalendar.Calendar;
  var Draggable = fullcalendar.Draggable;

  var containerEl = document.getElementById('external-events');
  var checkbox = document.getElementById('drop-remove');
  var calendarEl = document.getElementById('calendar');

  // initialize the external events
  // -----------------------------------------------------------------

  new Draggable(containerEl, {
    itemSelector: '.external-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText,
        backgroundColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
        borderColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
        textColor: window.getComputedStyle( eventEl ,null).getPropertyValue('color'),
      };
    }
  });

  var calendar = new Calendar(calendarEl, {
    headerToolbar: {
      left  : 'prev,next today',
      center: 'title',
      right : 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    themeSystem: 'bootstrap',
    //Random default events
    events: [
      {
        title          : 'All Day Event',
        start          : new Date(y, m, 1),
        backgroundColor: '#f56954', //red
        borderColor    : '#f56954', //red
        allDay         : true
      },
      {
        title          : 'Long Event',
        start          : new Date(y, m, d - 5),
        end            : new Date(y, m, d - 2),
        backgroundColor: '#f39c12', //yellow
        borderColor    : '#f39c12' //yellow
      },
      {
        title          : 'Meeting',
        start          : new Date(y, m, d, 10, 30),
        allDay         : false,
        backgroundColor: '#0073b7', //Blue
        borderColor    : '#0073b7' //Blue
      },
      {
        title          : 'Lunch',
        start          : new Date(y, m, d, 12, 0),
        end            : new Date(y, m, d, 14, 0),
        allDay         : false,
        backgroundColor: '#00c0ef', //Info (aqua)
        borderColor    : '#00c0ef' //Info (aqua)
      },
      {
        title          : 'Birthday Party',
        start          : new Date(y, m, d + 1, 19, 0),
        end            : new Date(y, m, d + 1, 22, 30),
        allDay         : false,
        backgroundColor: '#00a65a', //Success (green)
        borderColor    : '#00a65a' //Success (green)
      },
      {
        title          : 'Click for Google',
        start          : new Date(y, m, 28),
        end            : new Date(y, m, 29),
        url            : 'https://www.google.com/',
        backgroundColor: '#3c8dbc', //Primary (light-blue)
        borderColor    : '#3c8dbc' //Primary (light-blue)
      }
    ],
    editable  : true,
    droppable : true, // this allows things to be dropped onto the calendar !!!
    drop      : function(info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    }
  });

  calendar.render();
  // $('#calendar').fullcalendar()

  /* ADDING EVENTS */
  var currColor = '#3c8dbc' //Red by default
  // Color chooser button
  $('#color-chooser > li > a').on(function (e) {
    e.preventDefault()
    // Save color
    currColor = $(this).css('color')
    // Add color effect to button
    $('#add-new-event').css({
      'background-color': currColor,
      'border-color'    : currColor
    })
  })
  $('#add-new-event').on(function (e) {
    e.preventDefault()
    // Get value and make sure it is not null
    var val = $('#new-event').val()
    if (val.length == 0) {
      return
    }

    // Create events
    var event = $('<div />')
    event.css({
      'background-color': currColor,
      'border-color'    : currColor,
      'color'           : '#fff'
    }).addClass('external-event')
    event.text(val)
    $('#external-events').prepend(event)

    // Add draggable funtionality
    ini_events(event)

    // Remove event from text input
    $('#new-event').val('')
  })
})

export default Calendar