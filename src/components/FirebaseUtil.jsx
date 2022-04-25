import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export function firebaseConfig(){
    const config = {
        apiKey: "AIzaSyBRJUsbpcyohYEr_gzvMx71jWk50xeWUGY",
        authDomain: "movies-webpage.firebaseapp.com",
        projectId: "movies-webpage",
        storageBucket: "movies-webpage.appspot.com",
        messagingSenderId: "91767505069",
        appId: "1:91767505069:web:c71037b32cf7bb08874624",
        measurementId: "G-HQ5NY5QYX0"
      };

      const app = initializeApp(config);
      const analytics = getAnalytics(app);
}

export function registrarUsuariosEnFirebase(email, password, userName){
  createUserWithEmailAndPassword(getAuth(), email, password, userName)
  .then((res) => {
    // console.log(res);
  })
}

export async function iniciarSesionEnFirebase(email, password,userName){
    try {
      let credenciales = await signInWithEmailAndPassword(getAuth(), email, password, userName)
      // credenciales.user.displayName = userName
      return true;

    } catch (error) {
      return false
    }
}
