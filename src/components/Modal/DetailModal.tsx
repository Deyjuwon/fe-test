import React from 'react';
import view from '../../assets/np_view_1214519_000000 1.png';
import blacklist from '../../assets/np_delete-friend_3248001_000000 1.png';
import activate from '../../assets/np_user_2995993_000000 1.png';
import classes from './DetailModal.module.scss';

interface DetailModalProps {
  user: {
    username: string;
    email: string;
  } | null;
  onClose: () => void;
  onViewDetails: () => void; // Function to navigate to user details page
}

const DetailModal: React.FC<DetailModalProps> = ({ user, onClose, onViewDetails }) => {
  if (!user) return null; // Don't render if no user is selected

  return (
    <div
      className={classes.DetailModalContainer}
      onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
    >
      <button className={classes.closeButton} onClick={onClose}>
        &times; {/* A cross icon for the close button */}
      </button>
      <div onClick={onViewDetails} className={classes.actionItem} >
        <img src={view} alt="View" />
        <p>View Details</p>
      </div>
      <div className={classes.actionItem}>
        <img src={blacklist} alt="Blacklist" />
        <p>Blacklist User</p>
      </div>
      <div className={classes.actionItem}>
        <img src={activate} alt="Activate" />
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default DetailModal;
