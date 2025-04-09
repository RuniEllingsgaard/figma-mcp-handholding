import React from 'react';
import './DocumentTag.css';
import Icon, { IconName } from '../Icon/Icon';


interface DocumentTagProps {
  label: string;
  hasIcon?: boolean;
  iconName?: IconName;
}

export const DocumentTag: React.FC<DocumentTagProps> = ({
  label = 'PERSONAL',
  hasIcon = true,
  iconName = 'folder-icon',
}) => {
  return (
    <div className="document-tag">
     {hasIcon && iconName && <Icon name={iconName} />}
      <span className="document-tag-label">{label}</span>
    </div>
  );
};

export default DocumentTag; 