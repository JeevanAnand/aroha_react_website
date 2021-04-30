import {Link, NavLink} from 'react-router-dom'
import Images from "../images/logosmall.png"

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light py-5" style={{backgroundColor:'white'}}>
        <div>
        <img src={Images} alt="Not Found" className="img-fluid" />
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
           <ul className="navbar-nav" >

            <li className="nav-item ">
              <Link className="nav-link" to="/home">HOME <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/platform">PLATFORMS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technologies">TECHNOLIGES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">RESOURCES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/company">COMPANY</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">CONTACTS</NavLink>
            </li>  
          </ul>
        </div>
      </nav>
     );
}
 
export default NavBar;