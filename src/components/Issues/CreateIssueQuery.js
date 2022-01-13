import { gql } from "@apollo/client";

export const CREATE_ISSUE_FOR_REPO = gql `
mutation CreateIssue ( $repositoryId :String! $title:String! $body: String!){
    createIssue(input: {repositoryId: $repositoryId, title: $title, body:$body}) {
      issue {
        number
        body
      }
    }
  }
`;
