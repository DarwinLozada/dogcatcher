import firebase from "firebase"
import "firebase/auth"

import "./app"

import { registerUserInDatabase } from "./database"

const googleProvider = new firebase.auth.GoogleAuthProvider()

const mapUserFromFirebaseAuth = (userInfo) => {
  //  If user is not loged in and is not in session, return null state
  if (userInfo === null) return null
  const { displayName, email, photoURL, uid } = userInfo

  return {
    name: displayName,
    email,
    uid,
    avatar: photoURL,
  }
}

export const onAuthStateChanged = (onChange) => {
  try {
    return firebase.auth().onAuthStateChanged((user) => {
      const normalizedUser = mapUserFromFirebaseAuth(user)
      onChange(normalizedUser)
    })
  } catch (err) {
    console.log("hola")
    throw new Error(err)
  }
}

export const signOut = () =>
  firebase
    .auth()
    .signOut()
    .then((res) => console.log(res))
    .catch((err) => {
      throw new Error(err)
    })

export const login = () =>
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => {
      if (user.additionalUserInfo.isNewUser) {
        registerUserInDatabase(user.user.uid)
      }
      mapUserFromFirebaseAuth(user)
    })
    .catch((err) => {
      throw new Error(err)
    })
