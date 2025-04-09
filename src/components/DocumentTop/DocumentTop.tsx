import React from 'react';
import './DocumentTop.css';
import { TagBar } from '../TagBar/TagBar';

interface DocumentTopProps {
  spaceTitle: string;
  activeDocumentTitle: string;
}

export const DocumentTop: React.FC<DocumentTopProps> = ({
  spaceTitle,
  activeDocumentTitle
}) => {
  return (
    <div className="document-top">
      <TagBar spaceTitle={spaceTitle} activeDocumentTitle={activeDocumentTitle} />
      
    </div>
  );
};

export default DocumentTop; 