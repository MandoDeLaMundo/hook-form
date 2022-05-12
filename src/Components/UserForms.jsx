import React, { useState } from  'react';
import Display from './Display';
    
    
const UserForm = () => {
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, confirm };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>

            <div>
                <label>First Name: </label> 
                <input type="text" name="fname" onChange={ (e) => setFirstname(e.target.value) } value={ fname } />
            </div>

            <div>
                <label>Last Name: </label> 
                <input type="text" name="lname" onChange={ (e) => setLastname(e.target.value) } value={ lname } />
            </div>

            <div>
                <label>Email: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
            </div>

            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirm" onChange={ (e) => setConfirm(e.target.value) } value={ confirm }/>
            </div>

            </form>
            <p>Your Form Data</p>
            <Display fname={fname} lname={lname} email={email} password={password} confirm={confirm} />
        </div>
        );
};

export default UserForm;