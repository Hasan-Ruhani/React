import React from "react";

const Courses = (props)=> {
    const handelClick = ()=> {
        alert('hi');
    }
    return(
        <>
            <h1 className="text-[25px] font-bold">Name: {props.name}</h1>
            <h1 className="text-[25px] font-bold">Age: {props.age}</h1>
            <button onClick={handelClick} className="bg-purple-500 rounded-lg p-2 m-4">click</button>
        </>
    );
};

export default Courses;