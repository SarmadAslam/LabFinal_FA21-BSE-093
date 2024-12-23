import { StyleSheet, Text, View, Image } from 'react-native';
export default function ImageDetail(props)
{
return (
<View>
    <Text style= {styles.textStyle}>
    {props.title}
    </Text>
        <Image source = {props.imageSource} style={styles.ImageStyle}>
    </Image>
</View>
    )}

const styles = StyleSheet.create({
ImageStyle:{
        borderRadius: 20,
        alignSelf:'center'
      },
      textStyle:{
              fontSize:15,
              color:'black',
              fontWeight:'bold',
              alignSelf:'center',
              padding:12
          }
});