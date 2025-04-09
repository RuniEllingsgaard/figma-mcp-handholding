import React from "react";
import IconButton from "../IconButton/IconButton";
import './DocumentActions.css';

interface DocumentActionsProps {
    onDelete?: () => void;
}

export const DocumentActions: React.FC<DocumentActionsProps> = ({
    onDelete
}) => {
    return (
        <div className="document-actions-container">
            <IconButton iconName={'plus'} />
            <IconButton iconName={'trash'} onClick={onDelete} />
        </div>
    )
}

export default DocumentActions