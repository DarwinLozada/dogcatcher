import firebase from "firebase/app"

const appConfig = {
  apiKey: "AIzaSyDRdpq2F8N_8bbC18UzcueYNbjK8gVSySk",
  authDomain: "dogcatcher-d836e.firebaseapp.com",
  projectId: "dogcatcher-d836e",
  storageBucket: "dogcatcher-d836e.appspot.com",
  messagingSenderId: "364220370339",
  appId: "1:364220370339:web:b5119d9c97c8e2d6755e16",
  measurementId: "G-V6GRSL5XH8",
}

const app = !firebase.apps.length && firebase.initializeApp(appConfig)

export default app
