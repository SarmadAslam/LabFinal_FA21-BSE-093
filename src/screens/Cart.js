import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image,TextInput,FlatList,Button } from 'react-native';
import {useState} from 'react';

export default function Cart() {
const [input,setName] = useState('');
const [friends,setFriends] = useState([]);
const addItem=() =>{
    if(input.trim()){
    setFriends([...friends,input]);
    setName();
    }
}
  return (
    <View>
    <TextInput style={styles.input} value ={input}  onChangeText={newValue=>setName(newValue)}/>
    <Button title= "Add Item" onPress={addItem}/>
    <FlatList data ={friends} renderItem = {({item})=>{

    return (
        <View>
        <Text>{item}</Text>
        </View>
    )
    }}/>

  </View>
  );
}
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'pink',
        borderRadius: 2,
        margin:12,
        padding : 20,
        alignSelf:'center'

      },
      ImageStyle:{
        borderRadius: 20,
        backgroundColor:'yellow',

      }, input:{
               margin:15,
               borderColor:'black',
               borderWidth:1
           }
    });