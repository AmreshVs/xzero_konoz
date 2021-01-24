import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation PubliserLogin($input: PublisherLoginInput!){
    publisherLogin(input: $input) {
      jwt
      user {
        id
        fullname
        email
      }
    }
  }
`;
