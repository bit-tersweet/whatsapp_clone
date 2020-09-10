import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDivWX_GC3OdzqChHFkQmRF5_eM7jQFMd8",
    authDomain: "whatsapp-clone-6f015.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-6f015.firebaseio.com",
    projectId: "whatsapp-clone-6f015",
    storageBucket: "whatsapp-clone-6f015.appspot.com",
    messagingSenderId: "257468754173",
    appId: "1:257468754173:web:fd308da6832310410e7694",
    measurementId: "G-WGDTSXPSBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
