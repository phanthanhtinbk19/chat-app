import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyAu4qTI5xM4QwCnJoeFshnvBj4lNPw6Vk0",
	authDomain: "chat-room-15bb1.firebaseapp.com",
	projectId: "chat-room-15bb1",
	storageBucket: "chat-room-15bb1.appspot.com",
	messagingSenderId: "357615484893",
	appId: "1:357615484893:web:fac430b17bafefdfe84034",
	measurementId: "G-01WLMKYFFM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
	// auth.useEmulator('http://localhost:9099');
	// db.useEmulator('localhost', '8080');
}

export {db, auth};
export default firebase;
