import React from 'react'
import Modal from 'react-modal'
import DateTime from 'react-datetime'
import { useState } from 'react'
import "react-datetime/css/react-datetime.css";

export default function ({isOpen, onClose, OnEventAdded}) {
    const [title,setTitle]=useState("")
    const [start,setStart]=useState(new Date())
    const [end,setEnd]=useState(new Date())

    const onSubmit=(event)=>{
        event.preventDefault()
        OnEventAdded({
            title,
            start,
            end
        })
        onClose();
      }
    return(
        <div>
                    <Modal   style={{
                          overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)'
                          },
    content: {
      position: 'fixed',
      inset:'200px',
      top: '20px',
      left: '20px',
    
      right: '20px',
      bottom: '20px',
      border: '1px solid #ccc',
      background: '#343a40',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      marginLeft:'15rem',
      outline: 'none',
      padding: '20px'
    }
  }}
                    
                    isOpen={isOpen} onRequestClose={onClose} >
            <form onSubmit={onSubmit} style={{color:"black"}}>
            <div className='form-group'>
            <div className='form-group'>
                
                <label style={{color:"white  "}} >Event Title</label>
            <input type="text" className="form-control" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            </div>
            <div className='form-group'>
                
                <label style={{color:"white  "}}>Start Date</label>
            <DateTime 
value={start}  onChange={date => setStart(date)} />


            </div>
            
            <div className='form-group'>
                <label style={{color:"white  "}}>End Date</label>
            <DateTime     
            value={end} onChange={date => setEnd(date)} />

            </div>
            <button className='btn btn-success float-right'>Add Event</button>
            </form>

        </Modal>
        </div>

    )
}