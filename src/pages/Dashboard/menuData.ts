import { MenuSection } from './types';
import briefcase from '../../assets/briefcase 1 (1).png';
import home from '../../assets/home 1.png';
import userFriends from '../../assets/user-friends 1.png';
import users from '../../assets/users 1.png';
import sack from '../../assets/sack 1.png';
import handshake from '../../assets/handshake-regular 1.png';
import piggy from '../../assets/piggy-bank 1.png';
import Group from '../../assets/Group 104 (1).png';
import userCheck from '../../assets/user-check 1.png';
import userTimes from '../../assets/user-times 1.png';
import npBank from '../../assets/np_bank_148501_000000 1.png';
import coins from '../../assets/coins-solid 1.png';
import icon from '../../assets/icon.png';
import galaxy from '../../assets/galaxy 1.png';
import userCog from '../../assets/user-cog 1.png';
import scroll from '../../assets/scroll 1.png';
import chart from '../../assets/chart-bar 2.png';
import sliders from '../../assets/sliders-h 1.png';
import badge from '../../assets/badge-percent 1.png';
import clipboard from '../../assets/clipboard-list 1.png';

export const menuData: MenuSection[] = [
  { icon: briefcase, label: 'Switch Organization', hasDropdown: true },
  { icon: home, label: 'Dashboard' },
];

export const customersData: MenuSection[] = [
  { icon: userFriends, label: 'Users' },
  { icon: users, label: 'Guarantors' },
  { icon: sack, label: 'Loans' },
  { icon: handshake, label: 'Decision Models' },
  { icon: piggy, label: 'Savings' },
  { icon: Group, label: 'Loan Requests' },
  { icon: userCheck, label: 'Wishlists' },
  { icon: userTimes, label: 'Karma' },
];

export const businessData: MenuSection[] = [
  { icon: briefcase, label: 'Organization' },
  { icon: Group, label: 'Loan Products' },
  { icon: npBank, label: 'Savings Products' },
  { icon: coins, label: 'Fees and Charges' },
  { icon: icon, label: 'Transactions' },
  { icon: galaxy, label: 'Services' },
  { icon: userCog, label: 'Service Account' },
  { icon: scroll, label: 'Settlements' },
  { icon: chart, label: 'Reports' },
];

export const settingsData: MenuSection[] = [
  { icon: sliders, label: 'Preferences' },
  { icon: badge, label: 'Fees and Pricing' },
  { icon: clipboard, label: 'Audit Logs' },
];
