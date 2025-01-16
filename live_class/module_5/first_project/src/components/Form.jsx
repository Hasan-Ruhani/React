import React from "react";
import { useState } from "react";

const Form = ()=> {
    const [formData, setFormData]  = useState({name: "", email: ""});
    const [keyLog, setKeyLog] = useState("");

    const handelChange = (e)=> {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handelKeyUp = (e)=> {
        setKeyLog(`Key Up: ${e.key}`);
    }
    const handelKeyDown = (e)=> {
        setKeyLog(`Key Down: ${e.key}`);
    }
    const handelSubmit = (e)=> {
        e.preventDefault();
        alert('Form submitted');
    }
    
    return(
        <>
            <form onSubmit={handelSubmit}>
                <input 
                    className="border border-gray-600 p-3 rounded-lg m-2"
                    type="text" placeholder="Name" value={formData.name} onChange={handelChange} onKeyUp={handelKeyUp} onKeyDown={handelKeyDown} 
                />
                <input 
                    className="border border-gray-600 p-3 rounded-lg m-2"
                    type="email" placeholder="Email" value={formData.email} onChange={handelChange} onKeyUp={handelKeyUp} onKeyDown={handelKeyDown} 
                />
                <button type="submit" className="p-2 bg-purple-500 rounded-lg">Submit</button>
                <p>{keyLog}</p>
            </form>
        </>
    );
}
export default Form;