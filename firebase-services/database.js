import firebase from "firebase"

const database = firebase.firestore()

export const registerUserInDatabase = (userUID) => {
  database
    .collection("users")
    .doc(userUID)
    .set({
      favorites: [],
    })
    .catch((err) => {
      console.log(err)
    })
}

export const addPetToFavorites = (petName, petSpecies, userUID) => {
  const keyFieldToUpdate = `favorites.${petSpecies}`

  return database
    .collection("users")
    .doc(userUID)
    .update({
      [keyFieldToUpdate]: firebase.firestore.FieldValue.arrayUnion(petName),
    })
}

export const fetchFavoritePets = (userUID) => {
  return database.collection("users").doc(userUID).get()
}

export default database
