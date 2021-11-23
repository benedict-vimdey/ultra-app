import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {SidebarItems} from './SidebarItems'
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar]=useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>

        <div className="navbar">
            
            <Link to="#" className="menu-bars">
                <i className="fas fa-bars"  onClick={showSidebar}/>
            </Link>
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <i className="fas fa-times"  onClick={showSidebar}/>
                    </Link>                   

                </li>
                {SidebarItems.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path} >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </nav>

        </div>
        
    )
}

export default Navbar
