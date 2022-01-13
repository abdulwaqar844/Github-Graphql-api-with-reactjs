import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./GetUserList";
import { Link } from "react-router-dom";
const UserLists = ({ user, HandleUserLogin }) => {
  const { data, loading, error } = useQuery(GET_USER_LIST, {
    skip: user === "" ? true : false,
    variables: {
      user: user ? user : "",
    },
  });
  if (error) return <h1>Error</h1>;

  if (!data) {
    <h2>No Data Found</h2>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
   
    <div>
     {data?  <h2>Search Result for {user}</h2>:'' } 

      <div className="main-contaner">
        {data
          ? data.search.nodes.map((user) => {
              return (
                <Link
                style={{textDecoration:"none"}}
to={`user/${user.login}`}
                  className="userlist"
                  key={user.id}
                  onClick={() => HandleUserLogin(user.login)}
                >
                  <img
                    src={user.avatarUrl}
                    height={100}
                    width={100}
                    style={{ borderRadius: "13px" }}
                    alt=""
                  />
                  <p>{user.name ? user.name : "Name Not Available"}</p>
                </Link>
              );
            })
          : ""}
        
          {/* 
        */}
       
      </div>
    </div> 
  );
};

export default UserLists;
