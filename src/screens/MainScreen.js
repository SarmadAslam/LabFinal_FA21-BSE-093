import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
        <Text  style= {styles.textStyle1}>Box 1
        </Text>
         <Text  style= {styles.textStyle2}>Box 2
        </Text>
    </View>
    <View style={styles.col}>
     <Text  style= {styles.textStyle3}>Box 3
     </Text>
    </View>
      <View style={styles.row}>
          <Text  style= {styles.textStyle4}>Box 4
           </Text>
           <Text  style= {styles.textStyle5}>Box 5
           </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                //to apply on whole screen
//    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding:"12px"
//    flex-direction:"row",
//    justifyContent: 'space-around'
//    text-size:"2"
  },
  row:{
  backgroundColor:"pink",
  flexDirection:"row",
  justifyContent: 'space-between',
  padding:"12px",
  margin:"12px"
  },
  textStyle1:{
//  alignItems: 'stretch',
  backgroundColor:"red",
//  justifyContent: 'space-between',
//  flex-direction:"row"
//  padding:"12px",
//  margin:"12px",
    padding:"12px"
  },
  textStyle2:{
  backgroundColor:"yellow",
  padding:"12px"
  },textStyle3:{
  backgroundColor:"green",
  justifyContent: 'center',
  padding:"12px"
  },
  col:{
   justifyContent: 'center',
   padding:"12px",
   alignItems: 'center',
  },
  textStyle4:{
  backgroundColor:"blue",
  padding:"12px"
  },textStyle5:{
  backgroundColor:"red",
  padding:"12px"
  }

});
