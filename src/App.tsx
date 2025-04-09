import './App.css'
import SidePanel from './components/SidePanel/SidePanel'
import { Document } from './components/Document/Document'
import { useState } from 'react'

interface DocumentData {
  title: string;
  content: string;
}

function App() {
  const [documents, setDocuments] = useState<DocumentData[]>([
    { title: "Journal", content: "" },
    { title: "People I'll miss", content: "" },
    { title: "Book reviews", content: "" },
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleAddDocument = () => {
    const newDocumentTitle = `Untitled ${documents.length + 1}`;
    setDocuments([...documents, { title: newDocumentTitle, content: "" }]);
  };

  const handleDeleteDocument = () => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const newDocuments = [...documents];
      newDocuments.splice(activeIndex, 1);
      setDocuments(newDocuments);
      setActiveIndex(Math.max(0, activeIndex - 1));
    }
  };

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
        <SidePanel 
          spaceTitle="My Space" 
          documentItems={documents.map(doc => doc.title)}
          activeIndex={activeIndex}
          onActiveItemChange={setActiveIndex}
          onAddDocument={handleAddDocument}
        />
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
