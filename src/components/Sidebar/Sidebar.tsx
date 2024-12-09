import React from 'react';
import drop from '../../assets/np_next_2236826_000000 2.png';
import { MenuSection } from '../../pages/Dashboard/types';
import { menuData, customersData, businessData, settingsData } from '../../pages/Dashboard/menuData';
import classes from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  // Reusable function to render a menu section
  const renderMenuSection = (title: string | null, items: MenuSection[]) => (
    <div>
      {title && <p className={classes.asideHeader}>{title}</p>}
      {items.map((item, index) => (
        <span
          key={index}
          className={item.label === 'Users' ? classes.active : ''}
        >
          <img src={item.icon} alt={item.label} />
          <p>{item.label}</p>
          {item.hasDropdown && <img src={drop} alt="dropdown-icon" />}
        </span>
      ))}
    </div>
  );

  return (
    <aside className={classes.aside}>
      {renderMenuSection(null, menuData)}
      {renderMenuSection('CUSTOMERS', customersData)}
      {renderMenuSection('BUSINESSES', businessData)}
      {renderMenuSection('SETTINGS', settingsData)}
    </aside>
  );
};

export default Sidebar;
