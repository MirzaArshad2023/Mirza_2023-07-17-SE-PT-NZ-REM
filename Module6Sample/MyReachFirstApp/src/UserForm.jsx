import React from "react";
import { useState } from "react";

export function UserForm()
{
    const [firstname, updateFirstName] = useState('');
    const [email, updateEmail] = useState('')

    function HandleSubmit(formHandler)
    {
        formHandler.preventDefault();
        //alert(formHandler.target.elements.email.value) Not very efficient
        alert(`First Name:${firstname} and email:${email}`)
        const fData = new FormData(formHandler.target);
        alert("First Name :" + fData.get('firstName') + " email:" + fData.get('email'))
    }
    return(
        <form onSubmit={HandleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' name='firstName' value={firstname} onChange={(e)=>updateFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name='email' value={email} onChange={(e)=>updateEmail(e.target.value)}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}