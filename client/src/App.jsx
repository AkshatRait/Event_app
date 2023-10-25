import './App.css'
import { useState } from 'react'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import EmployeesForm from './components/EmployeesForm';
import EmployeesList from './components/Employees';

function App() {
  
  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);

  return (
    <>
      {/* <h1>My Events</h1>
      <EventForm  setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} /> */}
      <EmployeesList employees={employees} setEmployees={setEmployees}/>
      <EmployeesForm  employees={employees} setEmployees={setEmployees}/>
      {/* employee form */}
      {/* employee list */}
    </>
  )
}

export default App