import React from 'react';
import Icon, { IconName } from '../Icon/Icon';
import './IconButton.css';

interface IconButtonProps {
  /**
   * The name of the icon to display
   */
  iconName: IconName;
  /**
   * The size of the icon
   */
  iconSize?: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional additional class name
   */
  className?: string;
  /**
   * Is the button disabled
   */
  disabled?: boolean;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`icon-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon name={iconName} />
    </button>
  );
};

export default IconButton; 