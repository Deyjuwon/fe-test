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
}

const DetailModal: React.FC<DetailModalProps> = ({ user, onClose }) => {
  if (!user) return null; // Don't render if no user is selected

  return (
    <div className={classes.DetailModalContainer} onClick={onClose}>
          <div>
            <img src={view} alt="View" />
            <p>View Details</p>
          </div>
          <div>
            <img src={blacklist} alt="Blacklist" />
            <p>Blacklist User</p>
          </div>
          <div>
            <img src={activate} alt="Activate" />
            <p>Activate User</p>
          </div>
          
    </div>
  );
};

export default DetailModal;
