import { gql } from "@apollo/client";

export const WORKS = gql`
  query GetWorks {
    works {
      title
    }
  }
`;