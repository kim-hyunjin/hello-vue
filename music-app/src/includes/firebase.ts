import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBzDPAqlC7GGs-u8Hgt5trnTzCtt5iaDbs',
  authDomain: 'music-344ed.firebaseapp.com',
  projectId: 'music-344ed',
  storageBucket: 'music-344ed.appspot.com',
  appId: '1:1084158072091:web:fa1a3f67d820ffbb7defbe'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

const usersCollection = collection(db, 'users')

export { auth, db, usersCollection }
