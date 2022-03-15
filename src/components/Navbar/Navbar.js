import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import {connect} from 'react-redux'
//import * as action from '../../store/actions/index.js' 
import classes from './Navbar.module.css';


class Navbar extends Component  {
    render() {
    return (
        <div>
            <nav className={classes.Navbar}>

                <ul className={classes.Navlinks}>
                    { !this.state.isAuthenticated ? <li>
                        <Link to='/'>Home</Link>
                    </li> :  <li>
                        <Link to='/service'>OurService</Link>
                    </li> 
                    
                    }

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
}


// const mapStateToProps = dispatch => {
//     return {

//        isAuthenticated: state.token !== null

//     }
// }

//export default connect(null,  mapStateToProps)(Navbar);

export default Navbar