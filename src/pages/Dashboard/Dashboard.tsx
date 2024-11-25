import React from 'react';
import Header from '../../components/Header/Header';
import classes from './Dashboard.module.scss';
import drop from '../../assets/np_next_2236826_000000 2.png';
import { MenuSection } from './types';
import { menuData, customersData, businessData, settingsData } from './menuData';

const Dashboard: React.FC = () => {
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

  return (
    <div>
      <Header />
      <div className={classes.Dashboard}>
        <aside className={classes.aside}>
          {renderMenuSection(null, menuData)}
          {renderMenuSection('CUSTOMERS', customersData)}
          {renderMenuSection('BUSINESSES', businessData)}
          {renderMenuSection('SETTINGS', settingsData)}
        </aside>
        <div className={classes.rightDashboard}>
          <h1>Users</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
