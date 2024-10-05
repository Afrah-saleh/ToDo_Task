// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import ToDoListItems from './components/ToDoListItems';
import { addToDoItem, getToDoList } from './firebase/firebaseService'; // Import Firestore functions
import { appStyles } from './style/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  const [title, setTitle] = useState("");
  const [TodoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the ToDo list from Firestore
  const fetchToDoList = async () => {
    setLoading(true);
    try {
      const list = await getToDoList();
      setToDoList(list);
    } catch (e) {
      console.error("Error fetching ToDo list: ", e);
    }
    setLoading(false);
  };

  // Handle adding a new item
  const handleAddItem = async () => {
    if (title) {
      await addToDoItem(title);
      setTitle(""); // Clear input after adding
      fetchToDoList(); // Refresh the list
    }
  };

  // Load the list on component mount
  useEffect(() => {
    fetchToDoList();
  }, []);

  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.header}>
        <Text style={appStyles.heading}>To Do List</Text>
        <Text style={appStyles.numberOfItems}>{TodoList.length} items</Text>
      </View>

      {/* Input and Add Button Container */}
      <View style={appStyles.inputContainer}>
        {/* Text Input */}
        <TextInput
          placeholder="Enter new item"
          style={appStyles.input}
          value={title}
          onChangeText={setTitle}
          onSubmitEditing={handleAddItem} // Add on submit
        />
        
        {/* Add Button */}
        <Pressable style={appStyles.addButton} onPress={handleAddItem}>
          <MaterialIcons name="add" size={30} color="white" />
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={TodoList}
          renderItem={({ item }) => (
            <ToDoListItems
              title={item.title}
              isDone={item.isDone}
              id={item.id}
              getToDoList={fetchToDoList} // Refresh list after updates
            />
          )}
         // keyExtractor={(item) => item.id}
        />
      )}


    </SafeAreaView>
  );
}
