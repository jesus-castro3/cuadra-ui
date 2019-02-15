import React, { Component } from 'react';
import { navItems } from '../constants/interpolations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../NavBar/NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div>
        <nav className="nav-bar nav-bar--bottom">
          {navItems.map((item, idx) => <a key={idx} href={item.href} className="" alt-name={item.name}><FontAwesomeIcon icon={item.icon}/></a>)} 
        </nav>
      </div>
    )
  }
}

export default NavBar;