// components/ToDoListItems.js
import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { updateIsDone, deleteToDoItem } from "../firebase/firebaseService"; // Import functions
import { itemStyles } from "../style/style";
const ToDoListItems = (props) => {
  const [isDone, setIsDone] = useState(props.isDone);

  // Update isDone status in Firestore whenever state changes
  useEffect(() => {
    if (isDone !== props.isDone) {
      updateIsDone(props.id, isDone);
    }
  }, [isDone]);

  // Handle item deletion
  const handleDelete = async () => {
    await deleteToDoItem(props.id);
    props.getToDoList(); // Refresh the list after deletion
  };

  return (
    <View style={itemStyles.container}>
      <Pressable onPress={() => setIsDone(!isDone)}>
        {isDone ? (
          <AntDesign name="checkcircle" size={24} color="green" />
        ) : (
          <AntDesign name="checkcircleo" size={24} color="black" />
        )}
      </Pressable>

      <Text style={itemStyles.title}>{props.title}</Text>

      <Pressable onPress={handleDelete}>
      <AntDesign name="delete" size={20} color="red" />
      </Pressable>
    </View>
  );
};

export default ToDoListItems;