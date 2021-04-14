import firebase from "firebase"

const database = firebase.firestore()

export const registerUserInDatabase = (user) => {
  database.collection("users").doc(user.user.uid).set({
    favorites: [],
  })
}

export default database
