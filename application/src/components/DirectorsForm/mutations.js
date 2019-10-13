import { gql } from 'apollo-boost';

export const addDirectionMutation = gql`
    mutation addDirector($name: String!, $age: Int! ) {
        addDirector(name: $name, age: $age) {
            name
        }
    }
`;