//firebase/firebaseService.js

import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "./index";

// Function to add a new ToDo item to Firestore
export const addToDoItem = async (title) => {
  const docRef = await addDoc(collection(db, "ToDo"), {
    title: title,
    isDone: false, // Initialize the isDone status as false
  });
  console.log("Document written with ID: ", docRef.id);
};

// Function to get all ToDo items from Firestore
export const getToDoList = async () => {
  const querySnapshot = await getDocs(collection(db, "ToDo"));
  const list = [];
  querySnapshot.forEach((doc) => {
    list.push({
      ...doc.data(),
      id: doc.id, // Include document ID in the returned object
    });
  });
  return list;
};

// Function to update the "isDone" status of a ToDo item
export const updateIsDone = async (id, isDone) => {
  const ToDoRef = doc(db, "ToDo", id);
  await updateDoc(ToDoRef, { isDone: isDone });
};

// Function to delete a specific ToDo item from Firestore
export const deleteToDoItem = async (id) => {
  await deleteDoc(doc(db, "ToDo", id));
};
