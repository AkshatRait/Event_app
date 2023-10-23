import axios from 'axios';
import {useState} from 'react'

const Event = ({event, handleDelete}) =>{

    const [show,setShow] = useState(false);
    const [newDescription,setNewDescription] = useState(event.description);


    const handleClick=()=>{
      axios({
        method:"PUT",
        url: `/server/events/${event._id}`,
        data: {
          description:{newDescription}
        }
      })
    }

return (
    <div key={event._id} className="event-item">
    <button onClick={()=>handleDelete(event._id)}>Delete</button>
    <button onClick={()=>setShow(!show)}>Edit</button>
    <h2>{event.title}</h2>
    <p>Date: {event.date}</p>
    <p>Location: {event.location}</p>
    <p>Description: {event.description}</p>
    <div className="organizer">
      <strong>Organizer:</strong>
      <p>Name: {event.organizer.name}</p>
      <p>Role: {event.organizer.role}</p>
    </div>
    { show ? <form onSubmit={(e)=> e.preventDefault()}>
    <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)}  
    /> <button onClick={()=>handleClick(event._id)}>Update this Info</button>
   </form> : <></>}
  </div>
)
}
export default Event