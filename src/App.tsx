import './App.css'
import './styles/auth.css'
import SidePanel from './components/SidePanel/SidePanel'
import { Document } from './components/Document/Document'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import { AuthStatus } from './components/Auth/AuthStatus'
import { GoogleSignIn } from './components/Auth/GoogleSignIn'
import { documentService } from './firebase/documentService';

// Define the shape of our document data structure
interface DocumentData {
  id?: string;
  title: string;
  content: string;
  userId?: string;
}

function App() {
  const [user, loading] = useAuthState(auth);
  // Initialize state for documents array and currently active document index
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Fetch documents when user is authenticated
  useEffect(() => {
    const fetchDocuments = async () => {
      if (user) {
        try {
          const docs = await documentService.getAllDocuments(user.uid);
          setDocuments(docs);
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
      }
    };

    fetchDocuments();
  }, [user]);

  // Handler to add a new document to the list
  const handleAddDocument = async () => {
    if (!user) return;

    try {
      const newDocument = await documentService.createDocument({
        title: "Untitled",
        content: "",
        userId: user.uid
      });
      
      setDocuments([...documents, newDocument]);
      // Set the active index to the new document
      setActiveIndex(documents.length);
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  // Handler to delete the currently active document
  const handleDeleteDocument = async () => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const documentToDelete = documents[activeIndex];
      if (!documentToDelete.id) return;

      try {
        await documentService.deleteDocument(documentToDelete.id);
        const newDocuments = [...documents];
        newDocuments.splice(activeIndex, 1);
        setDocuments(newDocuments);
        // Update active index to previous document or first document if deleting first item
        setActiveIndex(Math.max(0, activeIndex - 1));
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  // Handler to update the content of the currently active document
  const handleContentChange = async (newContent: string) => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const documentToUpdate = documents[activeIndex];
      if (!documentToUpdate.id) return;

      try {
        const updatedDoc = await documentService.updateDocument(documentToUpdate.id, {
          content: newContent
        });
        
        const newDocuments = [...documents];
        newDocuments[activeIndex] = {
          ...newDocuments[activeIndex],
          content: newContent
        };
        setDocuments(newDocuments);
      } catch (error) {
        console.error('Error updating document:', error);
      }
    }
  };

  if (loading) {
    return <div className="auth-container">Loading...</div>;
  }

  if (!user) {
    return (
      <div className='login-view-container'>
        <div className="auth-container">
          <h1>Login or signup <mark>to start writing</mark></h1>
          <div className="auth-forms">
            <GoogleSignIn />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='default-container'>
        <AuthStatus />
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
