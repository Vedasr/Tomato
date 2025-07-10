// function MyEvents(){
//     return(
//         <div>
//             <h1>Events</h1>
//             <p>List of events are shown</p>
//         </div>
//     )
// }

import { useState } from "react";
import { useEffect, useContext } from "react";
import locationContext from "./locationcontext";
// export default MyEvents;
const MyEvents=()=>{
    const { location, updateLocation } = useContext(locationContext);

    const[eventName, setEventName]=useState('React');
    const[eventType, setEventType]=useState('Node');
    const[eventDesc, setEventDesc]=useState('Express');
    const handleEventNameChange=()=>{
        setEventName("Mongo Db");
    }
    const handleEventTypeChange=()=>{
        setEventType("HTML");
    }
    const handleEventDescChange=()=>{
        setEventDesc("CSS");
    }
    // const saveEvents=()=>{
    //     var data={
    //         'name':eventName,
    //         'type':eventType,
    //         'desc':eventDesc
    //     }
    //     JSON.stringify(data)
    //     fetch('/')
    // }
    useEffect(()=>{
        console.log('triggered useeffect');
    },[eventName]);
    return(
        <div>
            <h1>
                Events
            </h1><hr></hr>

            <p>location : {location}</p>
            {/* <h3>{eventName}</h3>
            <h3>{eventType}</h3>
            <h3>{eventDesc}</h3> */}
            {/* <button onClick={handleEventNameChange}>change name</button>
            <button onClick={handleEventTypeChange}>change type</button>
            <button onClick={handleEventDescChange}>change desc</button><br/><br/> */}
           <form>
            <div>
                   <label> Event Name : </label>
                    <input type="text" value={eventName} onChange={(e)=>setEventName(e.target.value)} /> <br/>
                     {/* For State changes */}
                    {/* <input type="text" value={eventName} onChange={handleEventNameChange} /> <br/> */}
                   
                    <label>Event Type : </label>
                    <input type="text" value={eventType} onChange={(e)=>setEventType(e.target.value)}/> <br/>
                  <label>Event Desc : </label>  
                    <input type="textarea" value={eventDesc} onChange={(e)=>setEventDesc(e.target.value)}/> <br/>

                    <input type="button" value="save"  className="btn btn-primary"/>
                    &nbsp;
                <input type="button" value="reset"  className="btn btn-secondary"/> &nbsp;
                </div>
            </form>
            <div>
            <h4>Name : {eventName}</h4>
                <h4>Type : {eventType}</h4>
                <h4>Desc : {eventDesc}</h4>
                </div>
        </div>
        
    )
}
export default MyEvents;