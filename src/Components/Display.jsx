import React from "react"

const Display = (props) =>
{
    return (
        <div>
        <p>First Name: {props.fname}</p>
        <p>Last Name: {props.lname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirm}</p>
        </div>
    )
}

export default Display