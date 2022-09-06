import React from "react";
import myimage from "../Images/woman.jpg"
function Home() {
    return (
        <div>
            <img src={myimage} height="100px" alt=""/>
            <h1>This is my Home component</h1>
        </div>
    )
}

export default Home