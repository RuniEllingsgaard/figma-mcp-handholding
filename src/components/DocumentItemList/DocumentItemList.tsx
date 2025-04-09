import React, { useState } from 'react';
import { DocumentItem } from '../DocumentItem/DocumentItem';
import './DocumentItemList.css';

export interface DocumentItemListProps {
  /**
   * Array of document titles
   */
  items: string[];
  /**
   * Index of the initially active item
   */
  initialActiveIndex?: number;
  /**
   * Optional callback when active item changes
   */
  onActiveItemChange?: (index: number) => void;
}

export const DocumentItemList: React.FC<DocumentItemListProps> = ({
  items,
  initialActiveIndex = 0,
  onActiveItemChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleItemChange = (index: number, isActive: boolean) => {
    if (isActive && index !== activeIndex) {
      setActiveIndex(index);
      onActiveItemChange?.(index);
    }
  };

  return (
    <div className="document-item-list">
      {items.map((title, index) => (
        <DocumentItem
          key={title}
          title={title}
          initialActive={false}
          isActive={index === activeIndex}
          onActiveChange={(isActive) => handleItemChange(index, isActive)}
        />
      ))}
    </div>
  );
};

export default DocumentItemList; 