// screens/DetailsScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import {db} from '../components/Firebase.js';


export default function DetailsScreen({ route, navigation }) {
    const { userId } = route.params;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
  
    const addDetails = async () => {
      try {
        await addDoc(collection(db, 'users'), {
          uid: userId,
          name: name,
          address: address,
          phone: phone,
        });
        navigation.navigate('UserActions');
      } catch (error) {
        console.log("Error:", error.message);
      }
      return (
        <View style={styles.container}>
          <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
          <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} />
          <Button title="Save Details" onPress={addDetails} />
        </View>
      );
    }
    };
  