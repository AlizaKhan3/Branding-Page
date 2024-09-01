import logo from "../assets/brand_logo.png"
// import "../App/css"
const Navbar = () =>{
    return(
        <div>
             <nav>
          <div className="logo">
            <img src={logo} />
          </div>
          <ul>            
            <li href="#">About</li>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">Sponsors</li>
          </ul>
          <button>Login</button>
        </nav>
        </div>
    )
}

export default Navbar;