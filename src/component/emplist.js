import React from 'react'

function Emplist({employees}) {
    console.log(employees)
    return (
        <table className="table hoverable is-fullwidth">
            <thead>
                <tr>
                    <th><abbr title="Employee Id">Id</abbr></th>
                    <th><abbr title="Employee Name">Name</abbr></th>
                    <th><abbr title="Employee Position">Position</abbr></th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp) =>{
                        return(
                            <tr>
                            <th>{emp.Id}</th>
                            <th><span className='is-size-6 has-text-weight-semibold'>{emp.empName}</span></th>
                            <th><span className='is-size-6'>{emp.role}</span></th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Emplist;