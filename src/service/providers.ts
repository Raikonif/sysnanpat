import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { FirebaseAuth } from "~/service/firebase.service";

const auth = FirebaseAuth;
const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const { user } = userCredential;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
export default signIn;
