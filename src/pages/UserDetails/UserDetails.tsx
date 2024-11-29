import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './UserDetails.module.scss'
import back from '../../assets/np_back_3007750_000000 1.png'
import profile from '../../assets/np_user_948637_000000 1.png'
import star1 from '../../assets/np_star_1208084_000000 1.png';
import star2 from '../../assets/np_star_1171151_000000 2.png';
interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;

    fullName?: string;
    bvn?: string;
    gender?: string;
    maritalStatus?: string;
    noOfChildren?: string;
    apartmentType?: string;
    levelOfEducation?: string;
    employmentStatus?: string;
    sectorOfEmployment?: string;
    durationOfEmployment?: string;
    officeEmail?: string;
    monthlyIncome?: string;
    loanRepayment?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    guarantorFullName?: string;
    guarantorEmail?: string;
    guarantorRelationship?: string;
    guarantorNumber?: string; 
    
  }
  

  

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // id is always a string from the route
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // Navigate back to the user list
    const handleBack = () => {
        navigate('/dashboard');
    };

    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await fetch(process.env.REACT_APP_MOCK_API_URL || '');
            const data: User[] = await response.json();
    
            console.log('API Data:', data); // Debug: Log the API response
    
            // Convert id from route (string) to number for comparison
            const selectedUser = data.find((user) => user.id === Number(id));
            setUser(selectedUser || null);
          } catch (error) {
            console.error('Error fetching user details:', error);
          } finally {
            setIsLoading(false);
          }
        };
    
        console.log('Route ID:', id); // Debug: Log the route parameter
        fetchUserDetails();
      }, [id]);

    
      if (isLoading) return <p>Loading user details...</p>;
      if (!user) return <p>User not found!</p>;
    

  return (
    <div className={classes.userDetailsContainer}>
      <Header />
      <div className={classes.userDetails}>
        <Sidebar />

        <div className={classes.userDetailsRight}>
            <div className={classes.backIcon} onClick={handleBack}>
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
                            <p>{user.username}</p>
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
                            <p>{user.username}</p>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <p>{user.phoneNumber}</p>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <p>BVN</p>
                            <p>{user.bvn}</p>
                        </div>
                        <div>
                            <p>GENDER</p>
                            <p>{user.gender}</p>
                        </div>
                        <div>
                            <p>MARITAL STATUS</p>
                            <p>{user.maritalStatus}</p>
                        </div>
                        <div>
                            <p>CHILDREN</p>
                            <p>{user.noOfChildren}</p>
                        </div>
                        <div>
                            <p>TYPE OF RESIDENT</p>
                            <p>{user.apartmentType}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={classes.userInfoPersonal}>
                    <p>Education and Employment</p>
                    <div className={classes.userInfoPersonalDetail}>
                        <div>
                            <p>LEVEL OF EDUCATION</p>
                            <p>{user.levelOfEducation}</p>
                        </div>
                        <div>
                            <p>EMPLOYMENT STATUS</p>
                            <p>{user.employmentStatus}</p>
                        </div>
                        <div>
                            <p>SECTOR OF EMPLOYMENT</p>
                            <p>{user.sectorOfEmployment}</p>
                        </div>
                        <div>
                            <p>DURATION OF EMPLOYMENT</p>
                            <p>{user.durationOfEmployment}</p>
                        </div>
                        <div>
                            <p>OFFICE EMAIL</p>
                            <p>{user.officeEmail}</p>
                        </div>
                        <div>
                            <p>MONTHLY INCOME</p>
                            <p>{user.monthlyIncome}</p>
                        </div>
                        <div>
                            <p>LOAN REPAYMENT</p>
                            <p>{user.loanRepayment}</p>
                        </div>
                    </div>

                </div>
                <div className={classes.userInfoPersonal}>
                    <p>Socials</p>
                    <div className={classes.userInfoPersonalDetail}>
                        <div>
                            <p>TWITTER</p>
                            <p>{user.twitter}</p>
                        </div>
                        <div>
                            <p>FACEBOOK</p>
                            <p>{user.facebook}</p>
                        </div>
                        <div>
                            <p>INSTAGRAM</p>
                            <p>{user.instagram}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.userInfoPersonal}>
                    <p>Guarantor</p>
                    <div className={classes.userInfoPersonalDetail}>
                        <div>
                            <p>FULL NAME</p>
                            <p>{user.guarantorFullName}</p>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <p>{user.guarantorNumber}</p>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <p>{user.guarantorEmail}</p>
                        </div>
                        <div>
                            <p>RELATIONSHIP</p>
                            <p>{user.guarantorRelationship}</p>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>

       
      </div>
    </div>
  )
}

export default UserDetails
