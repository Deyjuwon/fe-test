import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import classes from './Dashboard.module.scss';
import drop from '../../assets/np_next_2236826_000000 2.png';
import { MenuSection } from './types';
import { menuData, customersData, businessData, settingsData } from './menuData';
import icon1 from '../../assets/icon (1).png';
import icon2 from '../../assets/icon (2).png';
import icon3 from '../../assets/icon (3).png';
import icon4 from '../../assets/icon (4).png';
import filter from '../../assets/filter-results-button.png';
import rightArrow from '../../assets/np_next_2236826_000000 1.png';
import leftArrow from '../../assets/np_next_2236826_000000 2 (1).png';
import details from '../../assets/ic-more-vert-18px.png'
import DetailModal from '../../components/Modal/DetailModal';
// Type for User Stats
interface UserStat {
  icon: string;
  label: string;
  value: string | number;
}

// Type for User Data fetched from Mocky API
interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([]); // State to store user data
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading status
  const [itemsPerPage, setItemsPerPage] = useState<number>(10); // Default is 10
  const [currentPage, setCurrentPage] = useState<number>(1); // State to track current page
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal visibility state
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // State to track selected user

  // Handle opening the modal
  const handleOpenModal = (user: User) => {
    setSelectedUser(user); // Set the clicked user as selected
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // // Handle change in dropdown selection
  // const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setItemsPerPage(Number(event.target.value)); // Update the state with the selected value
  //   setCurrentPage(1); // Reset to the first page when items per page changes
  // };

  // Handle pagination
  const handlePagination = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Fetch data from the Mocky API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_MOCK_API_URL || '');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reusable function to render a menu section
  const renderMenuSection = (title: string | null, items: MenuSection[]) => (
    <div>
      {title && <p className={classes.asideHeader}>{title}</p>}
      {items.map((item, index) => (
        <span key={index}>
          <img src={item.icon} alt={item.label} />
          <p>{item.label}</p>
          {item.hasDropdown && <img src={drop} alt="dropdown-icon" />}
        </span>
      ))}
    </div>
  );

  // User statistics data
  const userStats: UserStat[] = [
    { icon: icon1, label: 'USERS', value: '2453' },
    { icon: icon2, label: 'ACTIVE USERS', value: '2,453' },
    { icon: icon3, label: 'USERS WITH LOANS', value: '12,453' },
    { icon: icon4, label: 'USERS WITH SAVINGS', value: '102,453' },
  ];

  // Function to get the CSS class for the status
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

  // Get current page data slice
  const currentPageData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Header />
      <div className={classes.Dashboard}>
        {/* Sidebar */}
        <aside className={classes.aside}>
          {renderMenuSection(null, menuData)}
          {renderMenuSection('CUSTOMERS', customersData)}
          {renderMenuSection('BUSINESSES', businessData)}
          {renderMenuSection('SETTINGS', settingsData)}
        </aside>

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

          {/* User Table */}
          {isLoading ? (
            <p>Loading data...</p>
          ) : (
            <table className={classes.userTable}>
              <thead>
                <tr>
                  <th>
                    <div className={classes.headerWithFilter}>
                      ORGANIZATION
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      USERNAME
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      EMAIL
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      PHONE NUMBER
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      DATE JOINED
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
                    </div>
                  </th>
                  <th>
                    <div className={classes.headerWithFilter}>
                      STATUS
                      <img src={filter} alt="filter-icon" className={classes.filterIcon} />
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
                        <img
                          src={details}
                          alt="Details"
                          onClick={() => handleOpenModal(user)} // Open modal on click
                          style={{ cursor: 'pointer' }}
                        />
                        
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
              {/* Detail Modal
              {isModalOpen && (
                          <DetailModal 
                            user={selectedUser} 
                            onClose={handleCloseModal} 
                          />
                )} */}
            </table>
          )}

          {/* Pagination */}
          <div className={classes.paginationContainer}>
            <div className={classes.paginationLeft}>
              <p>Showing {currentPageData.length} of {userData.length}</p>
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
