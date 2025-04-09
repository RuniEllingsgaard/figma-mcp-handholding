import React from 'react';
import './TagBar.css';
import { DocumentTag } from '../DocumentTag/DocumentTag';

interface TagBarProps {
  spaceTitle: string;
  activeDocumentTitle: string;
}

export const TagBar: React.FC<TagBarProps> = ({ spaceTitle, activeDocumentTitle }) => {
  return (
    <div className="tag-bar">
      <DocumentTag label={spaceTitle.toUpperCase()} hasIcon={true} iconName={'folder-icon'} />
      <DocumentTag label={`/${activeDocumentTitle.toUpperCase()}`} hasIcon={false}/>
      <DocumentTag label="NEW ENTRY" hasIcon={false}/>
    </div>
  );
};

export default TagBar; 