import axios from "axios";
import { useState } from "react"

const EmployeesForm =({setEmployees})=>{
  
  const [employeeData, setEmployeeData] = useState({
    name: '',
    title: '',
    description: '',
  })
  
  
          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setEmployeeData((prevState) => ({
              ...prevState,
              [name]: value
            }));
          };
        // const handleSubmit = (e) =>{
        //     e.preventDefault();
        //     try{
        //       const response = axios({
        //         method: "POST",
        //         url: '/server/employees',
        //         data: employeeData
        //       }).then((response) => {
        //         setEmployees((prevState) => {
          //           return [...prevState, response.data]
          //         });
        //       });;
        //       ;}
        //       catch(error){
        //         console.log(error)
        //       }
        //       setEmployees({
        //         name: "",
        //         title: "",
        //         description: ""
        //       })
        // }
        const handleSubmit = async (e) => {
          console.log("doing submit");
          e.preventDefault();
      
          try {
            const response = await axios({
              method: "POST",
              url: '/server/employees', 
              data: employeeData
            });
            console.log(response);
            // get the created event
            if (response.status >= 200 && response.status < 300) {
              // ADD response.data to the events state!
              setEmployees((employees) => {
                return [...employees, response.data]
              });
              console.log('Event registered successfully:', response.data);
      
            } else {
              console.error('Error registering event:', response.data);
            }
          } catch (error) {
            console.error('There was an error sending the request:', error);
          }
          setEmployeeData({
            name: '',
            title: '',
            description: ''
          })
          
        };

        

    return (
        <div>
        <h2>Add Employees here:</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={employeeData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={employeeData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
        </div>
    )
    
    }
    export default EmployeesForm