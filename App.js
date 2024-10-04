// App.js
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import ToDoListItems from './components/ToDoListItems';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import { app, db, getFirestore, collection, addDoc, getDocs,deleteDoc,doc } from "./firebase/index";
import { appStyles } from './styles'; // Import styles

export default function App() {
  // state to store data
  const [title, setTitle] = useState("");
  const [TodoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to save data into Firestore
  const addToDoItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "ToDo"), {
        title: title,
        isDone: false,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle(""); // Clear input after adding

      // Fetch the updated list
      getToDoList();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Function to read data from Firestore
  const getToDoList = async () => {
    setLoading(true); // Start loading
    try {
      const querySnapshot = await getDocs(collection(db, "ToDo"));
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({
          ...doc.data(),
          id: doc.id, // Add document ID to the object
        });
      });
      setToDoList(list); // Update state with the fetched list
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
    setLoading(false); // End loading
  };
// Function to delete all data from Firestore
  const deleteToDoList = async() =>{
    const querySnapshot = await getDocs(collection(db, "ToDo"));
      querySnapshot.docs.map((item)=> deleteDoc(doc(db, "ToDo", item.id)));
      getToDoList();

  }

  // useEffect to fetch the list when the component mounts
  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.header}>
        {/* header */}
        <Text style={appStyles.heading}>To Do List:</Text>
        {/* number of to do items */}
        <Text style={appStyles.numberOfItems}>{TodoList.length} items</Text>
        {/* delete all */}
        <Pressable onPress={deleteToDoList}>
        <MaterialIcons name="delete" size={30} color="black" />
        </Pressable>
      </View>

      {/* List */}
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={TodoList}
          renderItem={({ item }) => <ToDoListItems title={item.title} isDone={item.isDone} 
          id={item.id}
          getToDoList = {getToDoList}
          />}
          keyExtractor={(item) => item.id}
        />
      )}

      {/* input text */}
      <TextInput
        placeholder="Enter new item"
        style={appStyles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={addToDoItem}
      />
    </SafeAreaView>
  );
}
