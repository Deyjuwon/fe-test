import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './UserDetails.module.scss'

const UserDetails = () => {
  return (
    <div className={classes.userDetailsContainer}>
      <Header />
      <div className={classes.userDetails}>
        <Sidebar />

        <div className={classes.userDetailsRight}>

        </div>
      </div>
    </div>
  )
}

export default UserDetails
