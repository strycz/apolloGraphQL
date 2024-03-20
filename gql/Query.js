import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;


export const NEW_QUERY = gql`
query NewStuff {
  language(code: $code) {
    name
    code
    native
  }
}`

export const COUNTRY_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRY = gql`
query CountriesQuery($code: ID!) {
  continent(code: $code) {
    name
    countries {
      currency
      name
      code
    }
  }
}`