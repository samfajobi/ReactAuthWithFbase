import react from 'react'
import NavigationItem from '../NavigationItem/NavigationItem';


const NavigationItems = (props) => (
    <ul>
      <NavigationItem link='/' exact='true'> Home</NavigationItem>
      {props.isAuthenticated ? 
       <NavigationItem link='/logout'> LogOut </NavigationItem> 
       :
      <NavigationItem link='/auth'> Register </NavigationItem>}
      <NavigationItem link='/service'> Our Service </NavigationItem>
      <NavigationItem link='/connectus'> Contact Us </NavigationItem>
    </ul>
)

export default NavigationItems;
