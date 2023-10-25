import "./index.css"

const Employee = ({employee}) =>{
 

    return (
        <>
        <div key={employee.name} className="employee-card">
    <h2>Name:{employee.name}</h2>
    <p>Title:{employee.title}</p>
    <p>Description: {employee.description}</p>
    </div>
    {/* show form? */}
        </>
    )
}

export default Employee