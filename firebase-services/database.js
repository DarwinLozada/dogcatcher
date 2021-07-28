// Dependencies
import {
  mergeArraysInsideArray,
  sliceArrayBySteps,
} from "../utils/arrayFunctions"
import firebase from "firebase/app"
import "firebase/firestore"

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

export const deletePetFromFavorites = (petSpecies, petName, userUID) => {
  const fieldToUpdate = `favorites.${petSpecies}`

  console.log(fieldToUpdate)
  return database
    .collection("users")
    .doc(userUID)
    .update({
      [fieldToUpdate]: firebase.firestore.FieldValue.arrayRemove(petName),
    })
}
export const retrieveFavoritePetsData = (petList) => {
  const petSpeciesQueries = []

  for (const petSpecies in petList) {
    // Slice the petList in arrays with maximum length of 10
    // because Firestore does not allow an "in" array query
    // with lists that have more than 10 elements
    const petSpeciesSlicedArray = sliceArrayBySteps(petList[petSpecies], 10)
    for (let index = 0; index < petSpeciesSlicedArray.length; index++) {
      petSpeciesQueries.push(
        database
          .collection(petSpecies)
          .where("name", "in", petSpeciesSlicedArray[index])
          .get()
      )
    }
  }

  return Promise.all(petSpeciesQueries)
}

export const mapPetDataFromDatabase = (petsQueryList) => {
  const mergedPetsQueryList = mergeArraysInsideArray(petsQueryList)
  const allPetsInfoList = []

  try {
    mergedPetsQueryList.forEach((petSpeciesList) => {
      petSpeciesList.forEach((petData) => {
        allPetsInfoList.push(petData.data())
      })
    })
  } catch (err) {
    console.log(err)
  }

  return allPetsInfoList
}

export const fetchFavoritePets = (userUID, petsQuery) => {
  return database
    .collection("users")
    .doc(userUID)
    .get()
    .then((userData) => {
      let filteredPetsByQuery = {}

      for (const species in userData.data().favorites) {
        const filteredSpecies = userData
          .data()
          .favorites[species].filter((petName) => petName.includes(petsQuery))

        filteredPetsByQuery = {
          [species]: filteredSpecies,
          ...filteredPetsByQuery,
        }
      }

      return retrieveFavoritePetsData(filteredPetsByQuery)
    })
    .catch((err) => console.log(err))
}

export default database
