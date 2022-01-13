import { gql } from "@apollo/client";

export const GET_ISSUE_FOR_REPO = gql `
  query MyQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {

      issues(first: 30, filterBy: { states: OPEN }) {
        totalCount
        nodes {
          number
          title
          createdAt
        }
      }
      id
    }
  }
`;
