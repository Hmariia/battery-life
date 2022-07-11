import { Link } from "react-router-dom"

const Navbar = ({ onOpen }) => {

  return (
    <nav className="nav-container">
      <button onClick={() => onOpen() } className="nav-dropdown"></button>
      <Link to={`/`}><h1>Home</h1></Link>
    </nav>
  )
}

export default Navbar