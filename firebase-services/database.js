import firebase from "firebase"

const database = firebase.firestore()

export const registerUserInDatabase = (userUID) => {
  database.collection("users").doc(userUID).set({
    favorites: [],
  })
}

export const addPetToFavorites = (pet, userUID) => {
  console.log(userUID)
  return database
    .collection("users")
    .doc(userUID)
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(pet),
    })
}

export default database
