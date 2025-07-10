import { useContext } from "react";
import locationContext from "./locationcontext";
function MyHome(){
    const {location, updateLocation} = useContext(locationContext);
    return(
        <div>
            <h1>Home</h1>
            <p>Basic details of the website</p>
            <p>Location : {location}</p>
            <select onChange={(e)=>updateLocation(e.target.value)}>
                <option value='Bangalore'>Bangalore</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Delhi'>Delhi</option>
                <option value='Hyderabad'>Hyderabad</option>
                <option value='Chennai'>Chennai</option>
            </select><br/><br/>
            <button onClick={()=> updateLocation('New York')}>Change Location</button>
        </div>
    )
}
export default MyHome;