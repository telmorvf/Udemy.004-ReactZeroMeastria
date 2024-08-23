// 102. Links com reacf router
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to='/'>1. Home</Link>
        <Link to='/about'>1. About</Link>
      </nav>
      <br />
      <nav>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'ativo' : 'nao-ativo')}>2. Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'ativo' : 'nao-ativo')}>2. About</NavLink>
      </nav>
      <br />
      <nav>
        <NavLink to='/'>3. Home</NavLink>
        <NavLink to='/about'>3. About</NavLink>
      </nav>
    </>
  )
}

export default Navbar
