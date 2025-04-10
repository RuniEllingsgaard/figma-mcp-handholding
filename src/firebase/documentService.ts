import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  Timestamp,
  CollectionReference,
  DocumentData
} from 'firebase/firestore';
import { db } from './config';

export interface Document {
  id?: string;
  title: string;
  content: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  userId?: string;
}

export const documentService = {
  // Create a new document
  async createDocument(document: Omit<Document, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const docToCreate = {
        ...document,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, 'documents'), docToCreate);
      return { id: docRef.id, ...docToCreate };
    } catch (error) {
      console.error('Error creating document:', error);
      throw error;
    }
  },

  // Get all documents
  async getAllDocuments(userId?: string) {
    try {
      const documentsRef = collection(db, 'documents') as CollectionReference<DocumentData>;
      let q = query(documentsRef);
      
      if (userId) {
        q = query(documentsRef, where('userId', '==', userId));
      }
      
      const querySnapshot = await getDocs(query(q, orderBy('updatedAt', 'desc')));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Document[];
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error;
    }
  },

  // Get a single document by ID
  async getDocument(id: string) {
    try {
      const docRef = doc(db, 'documents', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Document;
      } else {
        throw new Error('Document not found');
      }
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  },

  // Update a document
  async updateDocument(id: string, updates: Partial<Document>) {
    try {
      const docRef = doc(db, 'documents', id);
      const updateData = {
        ...updates,
        updatedAt: Timestamp.now()
      };
      
      await updateDoc(docRef, updateData);
      return { id, ...updateData };
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  },

  // Delete a document
  async deleteDocument(id: string) {
    try {
      const docRef = doc(db, 'documents', id);
      await deleteDoc(docRef);
      return id;
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  },

  // Search documents by title
  async searchDocuments(searchTerm: string, userId?: string) {
    try {
      const documentsRef = collection(db, 'documents') as CollectionReference<DocumentData>;
      let q = query(documentsRef);
      
      if (userId) {
        q = query(documentsRef, where('userId', '==', userId));
      }
      
      const querySnapshot = await getDocs(q);
      const documents = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }) as Document)
        .filter(doc => 
          doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      return documents;
    } catch (error) {
      console.error('Error searching documents:', error);
      throw error;
    }
  }
}; 