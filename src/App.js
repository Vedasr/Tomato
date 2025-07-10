// import Menubar from "./menubar";
//import AddMovie from "./addmovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import AddMovie from './addmovie';
import MyEvents from './addevents';
import MyBookings from './addbookings';
import MyContacts from './addcontact';
import MyHome from './addhomeinfo';
import Login from './login';
import {  useState } from 'react';
import locationContext from './locationcontext';
function Veda(){
  const[location, setLocation] = useState('Bangalore');
  const updateLocation = (newLocation)=>{
    setLocation(newLocation);
  }
  // const location = useContext(locationContext);
  return (
    <locationContext.Provider value={{location, updateLocation}}>
    <div>
  {/* <h1>Welcome VedaSri</h1>
  <Menubar mytitle="happy to see you"></Menubar>
  <AddMovie title="Opening new"></AddMovie> */}
  <nav class="navbar navbar-expand-lg navbar-light bg-light"  style={{backgroundColor:"pink"}} >
  {/* <Link class="navbar-brand" to="/" >MyShow-{location}</Link> */}
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"pink"}} >
     <Link class="navbar-brand" to="/" style={{color:"black"}} >MyShow-{location}</Link>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home" style={{color:"black"}}>Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies" style={{color:"black"}}>Movies</Link>
      </li>
      {(location==='Bangalore')?
      <li class="nav-item">
        <Link class="nav-link" to="/events" style={{color:"black"}}>Events</Link>
      </li>
      :''}
      <li class="nav-item">
        <Link class="nav-link" to="/bookings" style={{color:"black"}}>Bookings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact" style={{color:"black"}}>Contact</Link>
      </li>
      {/* <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="#">Action</Link>
          <Link class="dropdown-item" to="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled">Disabled</Link>
      </li> */}
    </ul>
    <form class="form-inline my-2 my-lg-0" style={{  alignItems: "right" }} >
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
      <Link to="/login" type="button" class="btn btn-outline-success my-2 my-sm-0" >Login</Link>
    </form>
      
  </div>
</nav>
<Routes>
  <Route path='/home' element={<MyHome/>}/>
  <Route path='/movies' element={<AddMovie />}/>
  <Route path='/events' element={<MyEvents/>}/>
  <Route path='/bookings' element={<MyBookings/>}/>
  <Route path='/contact' element={<MyContacts/>}/>
  <Route path='/' element={<Login/>}/>

</Routes>
  </div>
  </locationContext.Provider>
);

}
export default Veda;