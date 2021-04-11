import Header from "../../components/Header";
import useUser, { handleLogin } from "../../stores/UserStore";
import { useEffect } from "react";

export default function Discover() {
  const [user, setUser] = useUser();

  useEffect(() => {
    handleLogin().then((user) => setUser(user));
  }, []);

  console.log(user);
  return (
    <>
      <Header />
      {user && <img src={user.picture}></img>}
    </>
  );
}
