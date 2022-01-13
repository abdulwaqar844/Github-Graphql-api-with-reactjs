import { gql } from "@apollo/client";

export const GET_USER_LIST = gql `
query SearchQ($user: String!) {
    search(query: $user, type: USER, first: 5) {
      nodes {
                ... on User {
          id
          name
          avatarUrl
          login
        }
      }
    }
  }
  
`;