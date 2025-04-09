import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import './TextSizeControl.css';

export interface TextSizeControlProps {
  onChange?: (isExpanded: boolean) => void;
}

const TextSizeControl: React.FC<TextSizeControlProps> = ({ onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onChange?.(newState);
  };

  return (
    <button
      className='container'
      onClick={handleClick}
      aria-label="Text size control"
    >
      <Icon name="text-t" />
      <Icon name="caret-down" />
    </button>
  );
};

export default TextSizeControl; 