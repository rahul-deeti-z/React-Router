import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/about'>About</NavLink>
        <br />
        <NavLink to='/products'>Products</NavLink>
    </nav>
    </div>
  )
}

export default Navbar

// NavLink: This is used when you want to highlight the current or active link.
// When the current link is active then class='active' will passed to that NavLink

//Link: Link: This is used when there is no special style or highlighting of your link.