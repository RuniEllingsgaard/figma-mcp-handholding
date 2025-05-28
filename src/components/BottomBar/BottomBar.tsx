import React from 'react';
import './bottombar.css';
import IconButton from '../IconButton/IconButton';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

interface BottomBarProps {
  onAddClick?: () => void;
  onGridClick?: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  onAddClick,
  onGridClick,
}) => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="bottom-bar">
      <IconButton iconName="plus" onClick={onAddClick} />
      <IconButton iconName="grid" onClick={onGridClick} />
      {user?.photoURL && (
        <img 
          src={user.photoURL} 
          alt="Profile" 
          className="bottom-bar__profile-image"
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
};

export default BottomBar; 