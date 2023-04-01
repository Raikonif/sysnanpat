import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc } from "@firebase/firestore";
import { FirebaseAuth, Firestore } from "~/service/firebase.service";
import { Note } from "../models/Note";

const auth = FirebaseAuth;
const signIn = async (email: string, password: string) => {
  let isLogged = false;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { user } = userCredential;
      isLogged = true;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  return isLogged;
};

const getNotes = async () => {
  const user = auth.currentUser;
  const notesRef = collection(Firestore, "notes");
  const docsSnap = await getDocs(notesRef);
  if (!user) {
    throw new Error("User not logged");
  }
  const notes: Note[] = [];
  const querySnapshot = docsSnap;
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const note: Note = {
      id: doc.id,
      title: data.title,
      description: data.description,
      favorite: data.favorite,
      imgUrl: data.imgUrl,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
    notes.push(note);
    console.log(`${doc.id} => ${data}`);
  });
  console.log(querySnapshot);
  return notes;
};

export default signIn;
