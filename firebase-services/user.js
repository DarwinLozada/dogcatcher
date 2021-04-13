import firebase from "firebase"
import "firebase/auth"

import firebaseConfig from "./config"

// If Firebase app is alredy initialized, do not initialize it again
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const googleProvider = new firebase.auth.GoogleAuthProvider()

const mapUserFromFirebaseAuth = (userInfo) => {
  if (userInfo) {
    const { displayName, email, photoURL } = userInfo

    return {
      name: displayName,
      email,
      avatar: photoURL,
    }
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user)
    onChange(normalizedUser)
  })
}

export const login = () =>
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(mapUserFromFirebaseAuth)
    .catch((err) => console.error(err))
