// Dependencies
import { mergeArraysInsideArray } from "../utils/arrayFunctions"
import firebase from "firebase"

const database = firebase.firestore()

export const registerUserInDatabase = (userInfo) => {
  database
    .collection("users")
    .doc(userInfo.uid)
    .set({
      userInfo: userInfo,
      favorites: {},
    })
    .catch((err) => {
      console.log(err)
    })
}

export const registerPetInDatabase = (petInfo, petSpecies) => {
  return database.collection(petSpecies).doc(petInfo.name).set(petInfo)
}

export const addPetToFavorites = (petInfo, petSpecies, userUID) => {
  const petSpeciesFieldToUpdate = `favorites.${petSpecies}`
  registerPetInDatabase(petInfo, petSpecies)

  return database
    .collection("users")
    .doc(userUID)
    .update({
      [petSpeciesFieldToUpdate]: firebase.firestore.FieldValue.arrayUnion(
        petInfo.name
      ),
    })
}

export const retrieveFavoritePetsData = (petList) => {
  const petSpeciesQueries = []

  for (const petSpecies in petList) {
    petSpeciesQueries.push(
      database
        .collection(petSpecies)
        .where("name", "in", petList[petSpecies])
        .get()
    )
  }

  return Promise.all(petSpeciesQueries)
}

export const mapPetDataFromDatabase = (petsQueryList) => {
  const mergedPetsQueryList = mergeArraysInsideArray(petsQueryList)
  const allPetsInfoList = []

  mergedPetsQueryList.forEach((petSpeciesList) =>
    petSpeciesList.forEach((petData) => {
      allPetsInfoList.push(petData.data())
    })
  )

  return allPetsInfoList
}

export const fetchFavoritePets = (userUID) => {
  return database
    .collection("users")
    .doc(userUID)
    .get()
    .then((userData) => retrieveFavoritePetsData(userData.data().favorites))
    .catch((err) => console.log(err))
}

export default database
