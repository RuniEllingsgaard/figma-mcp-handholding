import React from 'react';
import DocumentNav from '../DocumentNav/DocumentNav';
import DocumentActions from '../DocumentActions/DocumentActions';
import './DocumentBottom.css';

interface DocumentBottomProps {
  onDelete?: () => void;
  onSave?: () => void;
  onAlignLeft?: () => void;
  onAlignRight?: () => void;
  spaceTitle: string;
  activeDocumentTitle: string;
}

const DocumentBottom: React.FC<DocumentBottomProps> = ({
  onDelete
}) => {
  return (
    <div className="document-bottom">
      <DocumentNav />
      <DocumentActions onDelete={onDelete} />
    </div>
  );
};

export default DocumentBottom; 