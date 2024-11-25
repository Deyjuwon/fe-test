import React from 'react';
import logo from '../../assets/logo.svg';
import classes from '../Header/Header.module.scss'
import { CiSearch } from "react-icons/ci";
import bell from '../../assets/np_notification_2425223_000000 1.png';
import profile from '../../assets/avatar.png';
import dropdown from '../../assets/np_dropdown_615120_000000 1.png';
const Header = () => {
  return (
    <header className={classes.header}>
    
    {/* lhs */}
      <div className={classes.leftHeader}>
        <img src={logo} alt="" />
        <div className={classes.headerInput}>
            <input placeholder='Search for anything' type="text" />
            <span>
                <CiSearch size={20} color='white' />
            </span>
        </div>
      </div>

      {/* rhs */}
      <div className={classes.rightHeader}>
        <a href="#docs">Docs</a>
        <img src={bell} alt="" />
        <div className={classes.profileImg}>    
            <img src={profile} alt="" />
            <p>Adedeji</p>
            <img src={dropdown} alt="" />
        </div>
        

      </div>
    </header>
  )
}

export default Header
