import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <div>
            <nav className={classes.Navbar}>

                <ul className={classes.Navlinks}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/service'>OurService</Link>
                    </li>
                    <li>
                        <Link to='/auth'>Login/Register</Link>
                    </li>
                    <li>
                        <Link to='/logout'>LogOut</Link>
                    </li>
                    <li>
                        <Link to='/connectus'>ContactUs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;