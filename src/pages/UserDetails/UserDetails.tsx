import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './UserDetails.module.scss'
import back from '../../assets/np_back_3007750_000000 1.png'
import profile from '../../assets/np_user_948637_000000 1.png'
import star1 from '../../assets/np_star_1208084_000000 1.png';
import star2 from '../../assets/np_star_1171151_000000 2.png';

const UserDetails = () => {
  return (
    <div className={classes.userDetailsContainer}>
      <Header />
      <div className={classes.userDetails}>
        <Sidebar />

        <div className={classes.userDetailsRight}>
            <div className={classes.backIcon}>
                <img src={back} alt="" />
                <p>Back to Users</p>
            </div>

            <div className={classes.userDetailsHeading}>
                <p style={{fontSize: '24px'}}>User Details</p>
                <div className={classes.userDetailsHeadingRight}>
                    <p className={classes.blacklist}>BLACKLIST USER</p>
                    <p className={classes.activate}>ACTIVATE USER</p>
                </div>
            </div>

            <div className={classes.userProfileHeader}>
                <div className={classes.userProfileHeaderTop}>
                    <div className={classes.userProfileHeader1}>
                        <div className={classes.userProfileHeaderImg}><img src={profile} alt="" /></div>
                        <div className={classes.userProfileName }>
                            <p>Grace Effiom</p>
                            <p>LSQFf587g90</p>
                        </div>
                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.userProfileHeader2}>
                            <p>User’s Tier</p>
                            <div>
                                <img src={star1} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                            </div>
                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.userProfileHeader3}>
                            <p>₦200,000.00</p>
                            <p>9912345678/Providus Bank</p>
                        </div>
                    </div>

                    <div className={classes.userProfileHeaderBottom}>
                        <p>General Details</p>
                        <p>Documents</p>
                        <p>Bank Details</p>
                        <p>Loans</p>
                        <p>Savings</p>
                        <p>App and System</p>

                    </div>
            </div>    

            <div className={classes.userProfileInfo}>
                <div className={classes.userInfoPersonal}>
                    <p>Personal Information</p>
                    <div className={classes.userInfoPersonalDetail}>
                        <div>
                            <p>FULL NAME</p>
                            <p>Grace Effiom</p>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <p>grace@gmail.com</p>
                        </div>
                        <div>
                            <p>BVN</p>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <p>GENDER</p>
                            <p>Female</p>
                        </div>
                        <div>
                            <p>MARITAL STATUS</p>
                            <p>Single</p>
                        </div>
                        <div>
                            <p>CHILDREN</p>
                            <p>None</p>
                        </div>
                        <div>
                            <p>TYPE OF RESIDENT</p>
                            <p>Parent’s Apartment</p>
                        </div>
                    </div>
                </div>
                <div className={classes.userInfoPersonal}>
                    <p>Education and Employment</p>
                    <div className={classes.userInfoPersonalDetail}>
                        <div>
                            <p>level of education</p>
                            <p>B.Sc</p>
                        </div>
                        <div>
                            <p>employment status</p>
                            <p>Employed</p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>

                </div>
                <div className={classes.userInfoPersonal}>
                    <p>Socials</p>
                    <div className={classes.userInfoPersonalDetail}>

                    </div>
                </div>
                <div className={classes.userInfoPersonal}>
                    <p>Guarantor</p>
                    <div className={classes.userInfoPersonalDetail}>

                    </div>
                </div>
            </div>
                
        </div>

       
      </div>
    </div>
  )
}

export default UserDetails
