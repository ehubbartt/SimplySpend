import React, { useState } from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';
import houseLogo from './img/house.png';
import billsLogo from './img/bills.png';
import suggestionsLogo from './img/suggestions.png';
import groceriesLogo from './img/groceries.png';
import tabsLogo from './img/tabs.png';

function SideText(props) {
  const [isHover, setHover] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const hover = () => {
    setHover(!isHover);
  }

  let test = false;

  const navStyle = {
    color: 'white'
  }

  return (
    <NavLink style={navStyle} className="link" exact activeClassName='selectedLink' to={props.file}onMouseEnter={hover} onMouseLeave={hover}>
    <div className= {isHover ? 'lines colorChange' : 'lines'}>
      <img src={props.image} alt={props.name} className='side-logo' />
      <span className={test ? 'links selectedLink' : 'links'}>{props.name}</span>
    </div>
    </NavLink>
  )
}

function Nav() {

  return (
    <div id="mySideNav" className="sideNav">
      <div className='brandLine'>
        <img src={houseLogo} alt="house-logo" className="house-logo"/>
        <span className="brandName">SimplySpend</span>
      </div>
      <SideText image={billsLogo} name='Bills' file='/Bills' test={this} />
      <SideText image={suggestionsLogo} name='Suggestions' file='/Suggestions'/>
      <SideText image={groceriesLogo} name='Groceries' file='/Groceries' />
      <SideText image={tabsLogo} name='Tabs' file='/Tabs' />
    </div>
  );
}

export default Nav;