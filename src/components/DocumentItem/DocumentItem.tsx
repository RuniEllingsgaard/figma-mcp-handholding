import React, { useState } from 'react';
import './DocumentItem.css';

export interface DocumentItemProps {
  /**
   * Is the document item active (controlled)
   */
  isActive?: boolean;
  /**
   * Initial active state (uncontrolled)
   */
  initialActive?: boolean;
  /**
   * Document title
   */
  title: string;
  /**
   * Optional callback when active state changes
   */
  onActiveChange?: (isActive: boolean) => void;
}

export const DocumentItem: React.FC<DocumentItemProps> = ({
  isActive: controlledActive,
  initialActive = false,
  title,
  onActiveChange,
}) => {
  const [internalActive, setInternalActive] = useState(initialActive);
  
  // Use controlled state if provided, otherwise use internal state
  const isActive = controlledActive !== undefined ? controlledActive : internalActive;

  const handleClick = () => {
    if (controlledActive === undefined) {
      // Only update internal state if uncontrolled
      setInternalActive(!internalActive);
    }
    onActiveChange?.(!isActive);
  };

  return (
    <div 
      className={`document-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className="document-item__dot" />
      <span className="document-item__title">{title}</span>
    </div>
  );
}; 