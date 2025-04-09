import React from 'react';
import './TopBar.css';
import Icon from '../Icon/Icon';

export interface TopBarProps {
  spaceTitle: string;
  onAddClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ spaceTitle, onAddClick }) => {
  return (
    <div className="top-bar">
      <div className="spaces-container">
        <div className="space-indicators">
          <div className="space-dot active" />
          <div className="space-dot" />
          <div className="space-dot" />
        </div>
        <button className="add-button" onClick={onAddClick}>
          <Icon name="plus" size={16} />
        </button>
      </div>
      <div className="space-title">{spaceTitle}</div>
    </div>
  );
};

export default TopBar; 