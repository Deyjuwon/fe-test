import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import classes from './Dashboard.module.scss';
import icon1 from '../../assets/icon (1).png';
import icon2 from '../../assets/icon (2).png';
import icon3 from '../../assets/icon (3).png';
import icon4 from '../../assets/icon (4).png';
import filter from '../../assets/filter-results-button.png';
import rightArrow from '../../assets/np_next_2236826_000000 1.png';
import leftArrow from '../../assets/np_next_2236826_000000 2 (1).png';
import details from '../../assets/ic-more-vert-18px.png';

interface UserStat {
  icon: string;
  label: string;
  value: string | number;
}

interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data already exists in localStorage
        const storedData = localStorage.getItem('userData');
        if (storedData) {
          setUserData(JSON.parse(storedData)); // Set state from localStorage
        } else {
          // Fetch data from the API if not in localStorage
          const response = await fetch(process.env.REACT_APP_MOCK_API_URL || '');
          const data = await response.json();
          setUserData(data); // Set state from API
          localStorage.setItem('userData', JSON.stringify(data)); // Save to localStorage
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const userStats: UserStat[] = [
    { icon: icon1, label: 'USERS', value: '2453' },
    { icon: icon2, label: 'ACTIVE USERS', value: '2,453' },
    { icon: icon3, label: 'USERS WITH LOANS', value: '12,453' },
    { icon: icon4, label: 'USERS WITH SAVINGS', value: '102,453' },
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return classes.statusActive;
      case 'blacklisted':
        return classes.statusBlacklisted;
      case 'inactive':
        return classes.statusInactive;
      case 'pending':
        return classes.statusPending;
      default:
        return '';
    }
  };

  const handlePagination = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const currentPageData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Header />
      <div className={classes.Dashboard}>
        {/* Sidebar Component */}
        <Sidebar />

        {/* Right Dashboard */}
        <div className={classes.rightDashboard}>
          <h1>Users</h1>
          <div className={classes.userBoxContainer}>
            {userStats.map((stat, index) => (
              <div className={classes.userBox} key={index}>
                <img src={stat.icon} alt={stat.label} />
                <p>{stat.label}</p>
                <h2>{stat.value}</h2>
              </div>
            ))}
          </div>

          {isLoading ? (
            <p>Loading data...</p>
          ) : (
            <table className={classes.userTable}>
              <thead>
                <tr>
                  <th>
                    <div className={classes.headerWithFilter}>
                      ORGANIZATION
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      USERNAME
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      EMAIL
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      PHONE NUMBER
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      DATE JOINED
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      STATUS
                      <img src={filter} alt="filter-icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((user, index) => (
                  <tr key={index}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.dateJoined}</td>
                    <td className={classes.statusField}>
                      <span className={getStatusClass(user.status)}>{user.status}</span>
                      <span>
                        <img src={details} alt="Details" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className={classes.paginationContainer}>
            <div className={classes.paginationLeft}>
              <p>
                Showing {currentPageData.length} of {userData.length}
              </p>
            </div>
            <div className={classes.paginationRight}>
              <img
                src={leftArrow}
                alt="previous-page"
                onClick={() => handlePagination('prev')}
                style={{ cursor: currentPage > 1 ? 'pointer' : 'not-allowed' }}
              />
              <p className={classes.active}>{currentPage}</p>
              <img
                src={rightArrow}
                alt="next-page"
                onClick={() => handlePagination('next')}
                style={{ cursor: currentPage * itemsPerPage < userData.length ? 'pointer' : 'not-allowed' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
