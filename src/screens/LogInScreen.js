import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from "react-native";
import {db} from '../components/Firebase.js';
import {useState} from 'react';
import {collection,setDoc,doc,getDoc,getDocs,deleteDoc} from 'firebase/firestore';

export default function LogInScreen({navigation}) {
	const [email, setEmail]=useState('');
	const [password, setPassword]= useState('');
	
	function create()
	{

		setDoc(doc(collection(db,"users")),{
			email: email,
			password: password,
		}).then(()=>{
			// alert("data saved");
      navigation.navigate('Details', { userId });
		}).catch(error=>{alert('error')})
	}
		
		function getDatawithID()
	{
		getDoc(doc(db,"users","ciZareNo1QPySwJcbGaK")).then(docData=>{
			if(docData.exists())
			{
				setName(docData.data().email);
				setEmail(docData.data().password);
			}
			else
			{
				console.log("no such data exists");
			}
		}).catch(error=>{console.log(error)})
		
		
    function update() {
    updateDoc(doc(db, "users", 'ciZareNo1QPySwJcbGaK'), {     
      email: email,
      password: password,
    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  

    }).catch((error) => {
          // The write failed...
          console.log(error);
    });
    }

    function deleteData() {
          deleteDoc(doc(db, "users", 'ciZareNo1QPySwJcbGaK'));    
    }

    function getAlldata() {
      getDocs(collection(db, "users")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
            console.log("Document data:", users);       
      });
    }

    function getDataWithQuery () {
      getDocs(query(collection(db, "users"), where('email','==', 'NewUser@gmail.com'))).then(docSnap => {
         let users = []; 
          docSnap.forEach((doc)=> {
          users.push({ ...doc.data(), id:doc.id })
      });
          console.log("Document data:", users[0].username);           
      });
		
		
		
		
		}
	}
	
	
	return(
	<View behavior='padding' style={styles.container}>
	 <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.input}
         
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={()=>{create()} }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
      </View>
	</View>
	);

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});