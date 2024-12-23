import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export const storeDataInFirestore = async (todos) => {
    const todosCollection = collection(db, "todos");
    try {
        for (const todo of todos) {
            await addDoc(todosCollection, todo);
        }
        console.log("Data stored successfully.");
    } catch (error) {
        console.error("Error storing data in Firestore:", error);
    }
};

export const retrieveDataFromFirestore = async () => {
    const todosCollection = collection(db, "todos");
    try {
        const snapshot = await getDocs(todosCollection);
        return snapshot.docs.map((doc) => doc.data());
    } catch (error) {
        console.error("Error retrieving data from Firestore:", error);
        return [];
    }
};
