import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { User } from '../models/User';
import { generateRandomString } from '../utils';

const client = new ApolloClient({
  uri: process.env.HASURA_URL,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
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
    birthday: '',
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
					birthday
					address
        }
      }
    `,
    variables: {
      user,
    },
  });

  return data.insert_users_one;
};