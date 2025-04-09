import React from 'react';
import './TextColorButton.css';

interface TextColorButtonProps {
  color?: string;
  onClick?: () => void;
  className?: string;
}

export const TextColorButton: React.FC<TextColorButtonProps> = ({
  color = '#000000',
  onClick,
  className = '',
}) => {
  return (
    <button 
      className={`text-color-button ${className}`}
      onClick={onClick}
      type="button"
    >
      <div 
        className="text-color-button__dot"
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

export default TextColorButton; 