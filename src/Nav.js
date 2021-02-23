import React, { useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import houseLogo from './img/house.png';
import billsLogo from './img/bills.png';
import suggestionsLogo from './img/suggestions.png';
import groceriesLogo from './img/groceries.png';
import tabsLogo from './img/tabs.png';

function SideText(props) {
  const [isHover, setHover] = useState(false);

  const hover = () => {
    setHover(!isHover);
  }

  const navStyle = {
    color: 'white'
  }

  return (
    <Link style={navStyle} to={props.file} className="link" onMouseEnter={hover} onMouseLeave={hover}>
    <div className= {isHover ? 'colorChange' : 'lines'}>
      <img src={props.image} alt={props.name} className='side-logo' />
      <span className="links">{props.name}</span>
    </div>
    </Link>
  )
}

function Nav() {

  return (
    <div id="mySideNav" className="sideNav">
      <div className='brandLine'>
        <img src={houseLogo} alt="house-logo" className="house-logo"/>
        <span className="brandName">SimplySpend</span>
      </div>
      <SideText image={billsLogo} name='Bills' file='/Bills'/>
      <SideText image={suggestionsLogo} name='Suggestions' file='/Suggestions'/>
      <SideText image={groceriesLogo} name='Groceries' file='/Groceries' />
      <SideText image={tabsLogo} name='Tabs' file='/Tabs' />
      {/* <img src={houseLogo} alt="house-logo" className="house-logo" />
      <Link style={navStyle} to='/Suggestions' className="link">
        <span className="links">Suggestions</span>
        </Link>
      <Link style={navStyle} to='/Groceries' className="link">
        <span className="links">Groceries</span>
        </Link>
      <Link style={navStyle} to='/Tabs' className="link">
        <span className="links">Tabs</span>
        </Link> */}
    </div>
  );
}

export default Nav;