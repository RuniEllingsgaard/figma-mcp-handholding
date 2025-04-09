import React from 'react';
import './bottombar.css';
import IconButton from '../IconButton/IconButton';

interface BottomBarProps {
  onAddClick?: () => void;
  onSearchClick?: () => void;
  onGridClick?: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  onAddClick,
  onSearchClick,
  onGridClick,
}) => {
  return (
    <div className="bottom-bar">
     <IconButton iconName="plus" onClick={onAddClick} />
     <IconButton iconName="magnifying-glass" onClick={onSearchClick} />
     <IconButton iconName="grid" onClick={onGridClick} />
    </div>
  );
};

export default BottomBar; 