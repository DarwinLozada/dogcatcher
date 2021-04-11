import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { login } from "../firebase-services/user";

const UserContext = createContext();

export const handleLogin = () => {
  return login()
    .then((user) => user)
    .catch((err) => {
      console.error(err);
    });
};

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case "login":
//       return handleLogin().then((user) => user);
//   }
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); //User will be: userData, null or undefined

  const userValue = useMemo(() => [user, setUser], [user, setUser]);

  useEffect(() => console.log(user), [user]);

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
