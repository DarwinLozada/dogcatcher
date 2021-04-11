import firebase from "firebase";
import "firebase/auth";

import firebaseConfig from "./config";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const login = () => {
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((userInfo) => {
      const { additionalUserInfo } = userInfo;
      const { profile } = additionalUserInfo;
      return {
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
      };
    });
};
