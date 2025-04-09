import React from 'react';
import './TextButton.css';

interface TextButtonProps {
  buttonLabel?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  buttonLabel = 'SAVE',
}) => {
  return (
    <button className='text-button'>
     {buttonLabel}
    </button>
  );
};

export default TextButton; 