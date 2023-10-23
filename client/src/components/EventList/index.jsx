import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Event from '../Event';


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/server/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (eventId)=> {
     //1. go to mongoDb and delete from database
     //2. it will still display since its in state
     //3. so -setState with the Id
     let response = await axios({
      method: "DELETE",
      // /servers/events/:idOfEvent
      url: `/server/events/${eventId}`
     })
     if(response.status === 200){
      setEvents(events.filter(event=> event._id !== eventId))
     }
  }


  return (
    <div className="event-list">
      <h1>My Event List</h1>
      {events.map(event => (
       <Event event = {event} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default EventList;