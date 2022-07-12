import { Link } from "react-router-dom"

const Navbar = ({ onOpen }) => {

  return (
    <nav className="nav-container">
      <button id="open-sidebar" onClick={() => onOpen() } className="nav-dropdown"></button>
      <Link id="home-page" to={`/`}><h1>Home</h1></Link>
    </nav>
  )
}

export default Navbar