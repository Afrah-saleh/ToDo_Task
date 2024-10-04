import React, { useEffect, useState } from "react" 
import { StyleSheet, View , Text, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {db, doc, updateDoc,deleteDoc} from "../firebase/index";
import { itemStyles } from '../styles'; // Import styles

// to do list object
/*
1. idr
2. title
3. isDone
*/
const ToDoListItems = (props) => {
    const [isDone,setIsDone] = useState(props.isDone);

  // Function to update data from Firestore
    const updateIsDone =async() =>{
        const ToDoRef = doc(db, "ToDo", props.id);

            // Set the "capital" field of the city 'DC'
            await updateDoc(ToDoRef, {
            isDone: isDone
            });
    }

    useEffect(() =>{
        updateIsDone();
    },[isDone])

  // Function to delete data from Firestore
    const deleteToDoItem = async() => {
        await deleteDoc(doc(db, "ToDo", props.id));
        props.getToDoList();
    }

return(
    <View style = {itemStyles.container}>
     {/*checked icone*/}
     <Pressable onPress={() => setIsDone(!isDone)}>
        {
            isDone ? ( <AntDesign name="checkcircle" size={24} color="black" />
            ) : (
                <AntDesign name="checkcircleo" size={24} color="black" />

            )
        }

     </Pressable>

     {/*list item*/}
        <Text style ={itemStyles.title}>{props.title}</Text>


     {/*delete button*/}
     <Pressable onPress={deleteToDoItem}>
     <MaterialIcons name="delete" size={24} color="black" />
     </Pressable>


    </View>
)  
}

    export default ToDoListItems;
