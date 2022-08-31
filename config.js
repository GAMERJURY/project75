import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD4rhncuLZXHgXryaBXI2K9urJ4u5Hb3FE",
  authDomain: "ride-62df4.firebaseapp.com",
  projectId: "ride-62df4",
  storageBucket: "ride-62df4.appspot.com",
  messagingSenderId: "382137805969",
  appId: "1:382137805969:web:2efe3b44dfb1bfbce6a330"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
