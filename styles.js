// styles.js
import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    flex: 1,
  },
  numberOfItems: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 20,
  },
  inputContainer: {
    flexDirection: 'row',   // Align input and button side by side
    alignItems: 'center',   // Center vertically
    marginBottom: 5,       // Spacing from the list
    width: "100%",          // Take the full width of the container (90% removed)
    padding: 10,
  },
  input: {
    backgroundColor: "lightgray",
    padding: 10,
    fontSize: 17,
    flex: 1,                // Input takes remaining space
    borderRadius: 10,       // Rounded corners for input
  },
  addButton: {
    backgroundColor: 'green', // Green background for the button
    padding: 10,              // Equal padding to the input for visual consistency
    borderRadius: 10,         // Rounded corners for button
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center',     // Center the icon horizontally
    marginLeft: 0,            // Ensure no gap between input and button
  },
});

export const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //backgroundColor: "lightgray",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "500",
  },
});