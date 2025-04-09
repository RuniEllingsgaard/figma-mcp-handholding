import React from 'react';
import IconButton from '../IconButton/IconButton';
import './DocumentNav.css';

interface DocumentNavProps {
  
}

export const DocumentNav: React.FC<DocumentNavProps> = ({

}) => {
  return (
    <div className='document-nav-container'>
        <IconButton iconName={'arrow-right'} />
        <IconButton iconName={'arrow-left'} />
    </div>
  );
};

export default DocumentNav; 