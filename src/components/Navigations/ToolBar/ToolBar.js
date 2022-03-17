import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'




const ToolBar = (props) =>  (
    <header>

        <DrawerToggle />
        <nav>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
        
    </header>


   


  )


export default ToolBar