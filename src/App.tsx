import './App.css'
import SidePanel from './components/SidePanel/SidePanel'
import { Document } from './components/Document/Document'
import { useState } from 'react'

// Define the shape of our document data structure
interface DocumentData {
  title: string;
  content: string;
}

function App() {
  // Initialize state for documents array and currently active document index
  const [documents, setDocuments] = useState<DocumentData[]>([
    { title: "Journal", content: "" },
    { title: "People I'll miss", content: "" },
    { title: "Book reviews", content: "" },
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handler to add a new document to the list
  const handleAddDocument = () => {
    const newDocumentTitle = `Untitled ${documents.length + 1}`;
    setDocuments([...documents, { title: newDocumentTitle, content: "" }]);
  };

  // Handler to delete the currently active document
  const handleDeleteDocument = () => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const newDocuments = [...documents];
      newDocuments.splice(activeIndex, 1);
      setDocuments(newDocuments);
      // Update active index to previous document or first document if deleting first item
      setActiveIndex(Math.max(0, activeIndex - 1));
    }
  };

  // Handler to update the content of the currently active document
  const handleContentChange = (newContent: string) => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const newDocuments = [...documents];
      newDocuments[activeIndex] = {
        ...newDocuments[activeIndex],
        content: newContent
      };
      setDocuments(newDocuments);
    }
  };

  return (
    <>
      <div className='default-container'>
        {/* SidePanel component for document navigation and management */}
        <SidePanel 
          spaceTitle="My Space" 
          documentItems={documents.map(doc => doc.title)}
          activeIndex={activeIndex}
          onActiveItemChange={setActiveIndex}
          onAddDocument={handleAddDocument}
        />
        {/* Document component for displaying and editing the active document */}
        <Document 
          content={activeIndex >= 0 && activeIndex < documents.length ? documents[activeIndex].content : ""}
          onChange={handleContentChange}
          onDelete={handleDeleteDocument}
          spaceTitle="My Space"
          activeDocumentTitle={activeIndex >= 0 && activeIndex < documents.length ? documents[activeIndex].title : ""}
        />
      </div>
    </>
  )
}

export default App
