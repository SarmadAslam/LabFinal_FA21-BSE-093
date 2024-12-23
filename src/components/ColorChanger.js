import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';

export default function colorChanger({navigation}) {
  return (
    <View style={styles.viewStyle}>
        <Text>Welcome to color changer</Text>
        <Button title="onIncrese" onPress={()=>{}}/>
        <Button title="onDecrese" onPress={()=>{}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'pink',
        borderRadius: 20,
        margin:12,
        padding : 2,
        alignSelf:'center'

      },
      ImageStyle:{
        borderRadius: 20,
      }
    });