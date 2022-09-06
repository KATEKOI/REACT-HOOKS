import React from "react";
import woman from "../Images/variety-hi.jpg"
import '../App.css'
export function About(){
    return (
        <div>
            <img className="woman" src={woman} alt="" />
            <h1>This is the About page</h1>
        </div>
    )
}
