import { gql } from "@apollo/client";

export const GET_USER_REPO_INFO = gql `
query MyQuery($userLogin :String!){
  user(login: $userLogin) {
    repositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        id
        name
        owner{
          login
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
  
`;