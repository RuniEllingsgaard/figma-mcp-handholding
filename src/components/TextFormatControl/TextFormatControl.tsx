import React from 'react';
import Icon from '../Icon/Icon';
import './TextFormatControl.css';

export type TextFormat = 'bold' | 'italic' | 'underline' | null;

export interface TextFormatControlProps {
  activeFormat: TextFormat;
  onFormatChange: (format: TextFormat) => void;
}

const TextFormatControl: React.FC<TextFormatControlProps> = ({
  activeFormat,
  onFormatChange,
}) => {
  const handleFormatClick = (format: TextFormat) => {
    onFormatChange(activeFormat === format ? null : format);
  };

  return (
    <div className='container'>
      <button
        className='format-button'
        onClick={() => handleFormatClick('bold')}
        title="Bold"
      >
        <Icon name="text-bold"/>
      </button>
      <button
        className='format-button'
        onClick={() => handleFormatClick('italic')}
        title="Italic"
      >
        <Icon name="text-italic"/>
      </button>
      <button
        className='format-button'
        onClick={() => handleFormatClick('underline')}
        title="Underline"
      >
        <Icon name="text-underline"/>
      </button>
    </div>
  );
};

export default TextFormatControl; 