// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    return (
        <>
            <button onClick={()=>console.log("good")}>focus</button>
            <button onClick={() => console.log("Hey! Eyes on me!")}>blur</button>
        </>
    )
}

export default EyesOnMe