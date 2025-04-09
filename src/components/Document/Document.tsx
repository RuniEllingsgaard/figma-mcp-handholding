import React from 'react';
import styles from './Document.module.css';
import DocumentTop from '../DocumentTop/DocumentTop';
import DocumentBottom from '../DocumentBottom/DocumentBottom';

interface DocumentProps {
  placeholder?: string;
  onSave?: () => void;
  onChange?: (content: string) => void;
  content?: string;
  onDelete?: () => void;
  spaceTitle?: string;
  activeDocumentTitle?: string;
}

export const Document: React.FC<DocumentProps> = ({
  placeholder = 'Write anything...',
  onSave = () => {},
  onChange,
  content = '',
  onDelete,
  spaceTitle = 'PERSONAL',
  activeDocumentTitle = ''
}) => {
  return (
    <div className={styles.document}>
      <div className={styles.container}>
        <DocumentTop spaceTitle={spaceTitle} activeDocumentTitle={activeDocumentTitle} />
        <div className={styles.content}>
          <textarea
            className={styles.textarea}
            placeholder={placeholder}
            value={content}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </div>
        <DocumentBottom 
          onDelete={onDelete}
          onSave={onSave}
          onAlignLeft={() => {}}
          onAlignRight={() => {}}
          spaceTitle={spaceTitle}
          activeDocumentTitle={activeDocumentTitle}
        />
      </div>
    </div>
  );
}; 