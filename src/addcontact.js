import locationContext from "./locationcontext";
// import React from "react";
import { useContext } from "react";
function MyContacts(){
   
        const { location, updateLocation } = useContext(locationContext);
         return(
        <div>
            <h1>Contacts</h1>
            <p>List of Contacts are shown</p>
            {location}
        </div>
    )
}
export default MyContacts;