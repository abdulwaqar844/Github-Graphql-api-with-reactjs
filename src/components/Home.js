import { useState, useCallback } from "react";
import GetUserName from "./GetUserName";
import ShowUserList from "./ShowUserList";
const Home = () => {
  const [user, setUser] = useState("");

  const HandleChangeUser = useCallback((username) => {
    setUser(username);
  }, []);
  return (
    <div   style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
     
    }}>
      <GetUserName HandleChangeUser={HandleChangeUser} />
      <ShowUserList user={user}  />
    </div>
  );
};
export default Home;
