import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { FirebaseAuth } from "~/service/firebase.service";

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
export default signIn;
