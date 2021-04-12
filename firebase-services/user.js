import firebase from 'firebase'
import 'firebase/auth'

import firebaseConfig from './config'

// If Firebase app is alredy initialized, do not initialize it again
// eslint-disable-next-line no-unused-expressions
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const googleProvider = new firebase.auth.GoogleAuthProvider()

// eslint-disable-next-line import/prefer-default-export
export const login = () => firebase
  .auth()
  .signInWithPopup(googleProvider)
  .then((userInfo) => {
    const { additionalUserInfo } = userInfo
    const { profile } = additionalUserInfo

    return {
      name: profile.name,
      email: profile.email,
      picture: profile.picture
    }
  })
  .catch((err) => console.error(err))
