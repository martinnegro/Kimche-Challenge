import { gql } from '@apollo/client';

export const GET_COUNTRIES =  gql`
    {
        countries {
            code
            name
            emoji
            continent { code }
            languages { code }
        }
        continents {
            code
            name
        }
        languages {
            code
            name
        }
    }
`
export const GET_CONTINENTS = gql`
    {
        continents {
            code
            name
        }
    }
`
export const GET_LANGUAGES = gql`
    {
        languages {
            code
            name
        }
    }
`

export const groupByConstants = {
    CONTINENT: 'continent',
    LANGUAGE: 'languages'

}
