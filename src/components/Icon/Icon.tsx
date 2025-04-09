import React from 'react';
import './Icon.css';
import folderIcon from '../../assets/icons/folder-icon.svg';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import plusIcon from '../../assets/icons/plus.svg';
import trashIcon from '../../assets/icons/trash.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import magnifyingGlassIcon from '../../assets/icons/magnifying-glass.svg';
import linkIcon from '../../assets/icons/link.svg';
import imageSquareIcon from '../../assets/icons/image-square.svg';
import textUnderlineIcon from '../../assets/icons/text-underline.svg';
import textItalicIcon from '../../assets/icons/text-italic.svg';
import textBoldIcon from '../../assets/icons/text-bold.svg';
import caretDownIcon from '../../assets/icons/caret-down.svg';
import textTIcon from '../../assets/icons/text-t.svg';
import gridIcon from '../../assets/icons/grid.svg';
export type IconName = 
  | 'folder-icon' 
  | 'calendar-icon'
  | 'plus'
  | 'trash'
  | 'arrow-right'
  | 'arrow-left'
  | 'magnifying-glass'
  | 'link'
  | 'image-square'
  | 'text-underline'
  | 'text-italic'
  | 'text-bold'
  | 'caret-down'
  | 'text-t'
  | 'grid';

interface IconProps {
  name: IconName;
  size?: number;
}

const iconMap: Record<IconName, string> = {
  'folder-icon': folderIcon,
  'calendar-icon': calendarIcon,
  'plus': plusIcon,
  'trash': trashIcon,
  'arrow-right': arrowRightIcon,
  'arrow-left': arrowLeftIcon,
  'magnifying-glass': magnifyingGlassIcon,
  'link': linkIcon,
  'image-square': imageSquareIcon,
  'text-underline': textUnderlineIcon,
  'text-italic': textItalicIcon,
  'text-bold': textBoldIcon,
  'caret-down': caretDownIcon,
  'text-t': textTIcon,
  'grid': gridIcon,

};

const Icon: React.FC<IconProps> = ({ name, size = 16 }) => {
  return (
    <img 
      src={iconMap[name]} 
      alt={name}
      className="icon-image"
      style={{ width: size, height: size }}
    />
  );
};

export default Icon; 