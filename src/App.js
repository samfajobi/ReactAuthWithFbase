import React, { Component} from 'react';

 import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 import {connect} from 'react-redux';
 import Navbar from './components/Navbar/Navbar'
 import HomePage from './components/HomePage/HomePage'
 import Auth from './containers/Auth/Auth'
 import LogOut from './containers/Auth/LogOut/LogOut'
 import Service from './components/OurServices/OurService'
 import ConnectUs from './components/ConnectWithUs/ConnectUs'



class App extends Component  {
  render () {

    let routes = (
     
        <Routes>
          <Route  exact path='/' element={<HomePage />} />
          <Route  exact path='/auth' element={<Auth />} />  
        </Routes>
     
    )

    if (this.props.isAuthenticated) {
      routes = (
       <Routes>
          <Route  path='/service' element={<Service />} />
          <Route  path='/connectus' element={<ConnectUs />} />
          <Route  exact path='/logout' element={<LogOut />} />
        </Routes>
     
        
      )
      

      }
    return (
     <Router>
        <Navbar />
        {routes}
      </Router>
        
      
    
   
      
    
  );
  }
  
}


const mapStateToProps = state  => {
  return {
     isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch  => {
  return {
    ontry: () => dispatch()

  }
}


export default connect(mapStateToProps, mapDispatchToProps )(App);

