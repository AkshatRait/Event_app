import { useEffect, useState } from "react";
import Employee from "../Employee"
import axios from "axios";

const EmployeesList =({employees,setEmployees})=>{

      useEffect(()=>{
        const fetchEvents= async()=>{
          try{
            const response = await axios("/server/employees");
            setEmployees(response.data)
          }
          catch (error) {
            console.error('Error fetching events:', error);
          }
        }
        fetchEvents()
    },[])

return (
    <div className="employee-list">
    <h1>My List Of Employees</h1>
    {employees.map((employee) => (
       <Employee employee={employee}/>
    ))}
  </div>
)

}
export default EmployeesList