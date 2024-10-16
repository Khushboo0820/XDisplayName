import React from "react";
import { useState} from "react";
import "./Nameform.css";

const NameForm=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[fullName,setFullName]=useState("");
    const[error,setError]=useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!firstName || !lastName) {
        setError("Both fields are required.");
        return;
      }
        setError(""); // Clear error
        setFullName(`${firstName} ${lastName}`); // Set full name
    
    };

    return (
      <div>
        <h1 className="heading">Full Name Display</h1>

        <form onSubmit={handleSubmit}>
       
          <label>First Name:
            <input
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
         

        
          <label>Last Name:
            <input
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
         
          <button type="submit" styles="text:center">Submit</button>
        </form>
       
        {error && <p style={{ color: "red" }}>{error}</p>}
      {fullName && <h2 style={{textAlign:"center"}}>Full Name: {fullName}</h2>}
      </div>
    );
    };
   
  export default NameForm;