// firebase/firebaseService.js
import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "./index";

// Function to add a new ToDo item to Firestore
export const addToDoItem = async (title) => {
  try {
    const docRef = await addDoc(collection(db, "ToDo"), {
      title: title,
      isDone: false, // Initialize the isDone status as false
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Propagate the error
  }
};

// Function to get all ToDo items from Firestore
export const getToDoList = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ToDo"));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push({
        ...doc.data(),
        id: doc.id, // Include document ID in the returned object
      });
    });
    return list;
  } catch (e) {
    console.error("Error fetching documents: ", e);
    throw e; // Propagate the error
  }
};

// Function to update the "isDone" status of a ToDo item
export const updateIsDone = async (id, isDone) => {
  const ToDoRef = doc(db, "ToDo", id);
  try {
    await updateDoc(ToDoRef, { isDone: isDone });
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e; // Propagate the error
  }
};

// Function to delete a specific ToDo item from Firestore
export const deleteToDoItem = async (id) => {
  try {
    await deleteDoc(doc(db, "ToDo", id));
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e; // Propagate the error
  }
};
