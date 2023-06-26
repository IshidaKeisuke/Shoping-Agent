import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { User } from '../models/User';
import { generateRandomString } from '../utils';
import { HASURA_URL, HASURA_ADMIN_SECRET } from '@env'

const client = new ApolloClient({
  uri: HASURA_URL,
  headers: {
    'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export const getUsers = async (): Promise<User[]> => {
  const { data } = await client.query({
    query: gql`
      query GetUsers {
        users {
					id
					name
					email
					gender
					birthday
					address
        }
      }
    `,
  });

  return data.users;
};

export const createUser = async (email: string): Promise<User> => {
  const nameStringLength = 15
  const name = generateRandomString(nameStringLength)
  const user = {
    name: name,
    email: email,
    gender: '',
    prefecture: '',
    address: ''
  };

  const { data } = await client.mutate({
    mutation: gql`
      mutation CreateUser($user: users_insert_input!) {
        insert_users_one(object: $user) {
					id
					name
					email
					gender
          prefecture
					address
        }
      }
    `,
    variables: {
      user,
    },
  });
  console.log(data.insert_users_one)
  return data.insert_users_one;
};