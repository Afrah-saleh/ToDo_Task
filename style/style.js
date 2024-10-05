// style.js
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
    flexDirection: 'row',   
    alignItems: 'center',   
    marginBottom: 5,       
    width: "100%",          
    padding: 20,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "lightgray",
    padding: 10,
    fontSize: 17,
    flex: 1,                
    borderRadius: 10,       
  },
  addButton: {
    backgroundColor: 'green', 
    padding: 7,              
    borderRadius: 50,         
    justifyContent: 'center', 
    alignItems: 'center',     
    marginLeft: 5,            
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