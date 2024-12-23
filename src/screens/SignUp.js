import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { my_auth } from "../components/Firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function SignUpWithEmail() {
        try {
            const response = await createUserWithEmailAndPassword(my_auth, email, password);
            alert("User Signed Up: " + response.user.email);
        } catch (error) {
            console.log(error);
            alert("Sign Up failed: " + error.message);
        }
    }

    async function signInWithEmail() {
        try {
            const response = await signInWithEmailAndPassword(my_auth, email, password);
            alert("User Signed In: " + response.user.email);
        } catch (error) {
            console.log(error);
            alert("Sign In failed: " + error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Email:</Text>
            <TextInput
                value={email}
                placeholder="email@address.com"
                onChangeText={(newText) => setEmail(newText)}
                style={styles.input}
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(newText) => setPassword(newText)}
                style={styles.input}
            />
            <Button title="Sign Up" onPress={SignUpWithEmail} />
            <Button title="Sign In" onPress={signInWithEmail} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 8,
    },
});
