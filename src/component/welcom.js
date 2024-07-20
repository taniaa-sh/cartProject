import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"

export const Welcome=()=>{
    const [showWelcome,setShowWelcome]=useState();
    useEffect(()=>{
   const data =localStorage.getItem("show-app-intro")
   setShowWelcome(JSON.parse(data) ?? true)
    },[])
    const onHideWelcome =()=>{
        setShowWelcome(false)
        localStorage.setItem("show-app-intro",JSON.stringify(false)) //save mishe to local storage
    }
return (
    <React.Fragment>
    {showWelcome && (
        <div className="container">
        <div className="bg-primary text-white my-3">
            <FontAwesomeIcon icon={faClose} style={{float:"right" , margin:"5px"}} onClick={onHideWelcome}/>
            <div className="p-4">welcome</div>
        </div>
    </div>

    )}
   </React.Fragment>
)
}