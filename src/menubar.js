function Menubar(props){
    return( /* only one parent element can be created its ul and only one should be there */
        /* it can be a main parent */
        <div> 
            <h1>{props.mytitle}</h1>
        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Events</li>
            <li>Contact</li>
        </ul>
        </div>
    )
}
export default Menubar;