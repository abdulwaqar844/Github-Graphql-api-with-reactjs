import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_REPO_INFO } from "./GetUserRepositries";
import { Link, useParams } from "react-router-dom";
const UserLists = () => {
  let { userID } = useParams();
  console.log("Params", userID);
  const { data, loading, error } = useQuery(GET_USER_REPO_INFO, {
    skip: userID === "" ? true : false,
    variables: {
      userLogin: userID ? userID : "",
    },
  });
  if (error) return <h1>Error</h1>;
  if (!data) {
    <h2>No Data Found</h2>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  console.log(data)

  return (
    <div>
      <div className="repo_list"></div>
      {data ? <h2>Repositries</h2> : ""}
      {data
        ? data.user.repositories.nodes.map((repo, i) => (
            <span
              key={i}
              className="repoName"
              // onClick={() => HandleIssue(repo.owner.login, repo.name)}
            >
              <Link         style={{textDecoration:"none"}} to={repo.name}>{repo.name}</Link>
              <h4>
                {repo.stargazers.totalCount} Stars / {repo.watchers.totalCount}
                Watching
              </h4>
            </span>
          ))
        : ""}
    </div>
  );
};
export default UserLists;
