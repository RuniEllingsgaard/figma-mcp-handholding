import React from 'react';
import TopBar from '../TopBar/TopBar';
import DocumentItemList from '../DocumentItemList/DocumentItemList';
import BottomBar from '../BottomBar/BottomBar';
import './SidePanel.css';

export interface SidePanelProps {
  spaceTitle: string;
  documentItems: string[];
  activeIndex: number;
  onAddDocument: () => void;
  onAddSpace?: () => void;
  onSearch?: () => void;
  onProfileClick?: () => void;
  onActiveItemChange: (index: number) => void;
  isLoading?: boolean;
}

export const SidePanel: React.FC<SidePanelProps> = ({
  spaceTitle,
  documentItems,
  activeIndex,
  onAddDocument,
  onAddSpace,
  onSearch,
  onProfileClick,
  onActiveItemChange,
  isLoading = false,
}) => {
  return (
    <div className="side-panel">
        <TopBar 
          spaceTitle={spaceTitle}
          onAddClick={onAddSpace}
        />
        <DocumentItemList 
          items={documentItems} 
          initialActiveIndex={activeIndex}
          onActiveItemChange={onActiveItemChange}
        />
        <BottomBar 
          onAddClick={onAddDocument}
          onSearchClick={onSearch}
          onGridClick={onProfileClick}
          disabled={isLoading}
        />
    </div>
  );
};

export default SidePanel; 