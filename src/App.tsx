import './App.css'
import './styles/auth.css'
import SidePanel from './components/SidePanel/SidePanel'
import { Document } from './components/Document/Document'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import { GoogleSignIn } from './components/Auth/GoogleSignIn'
import { documentService } from './firebase/documentService';
import React from 'react';

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

  // Create a debounced update function using a timeout
  const [updateTimeout, setUpdateTimeout] = React.useState<NodeJS.Timeout | null>(null);

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

  // Update the content change handler
  const handleContentChange = (newContent: string) => {
    if (activeIndex >= 0 && activeIndex < documents.length) {
      const documentToUpdate = documents[activeIndex];
      if (!documentToUpdate.id) return;

      // Update local state immediately
      const newDocuments = [...documents];
      newDocuments[activeIndex] = {
        ...newDocuments[activeIndex],
        content: newContent
      };
      setDocuments(newDocuments);

      // Clear any existing timeout
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }

      // Set a new timeout for the Firebase update
      const timeout = setTimeout(async () => {
        try {
          await documentService.updateDocument(documentToUpdate.id!, {
            content: newContent
          });
        } catch (error) {
          console.error('Error updating document:', error);
        }
      }, 5000); // Wait 5 seconds after the last keystroke before updating Firebase

      setUpdateTimeout(timeout);
    }
  };

  // Clean up the timeout when component unmounts
  React.useEffect(() => {
    return () => {
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
    };
  }, [updateTimeout]);

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
