import ApolloClient, {InMemoryCache} from "apollo-boost";
import gql from 'graphql-tag';
import 'cross-fetch/polyfill';
import * as config from '../../static/config.json'

export const graphqlClient = async () => {
  var client = new ApolloClient({
    uri: config.graphqlEndpoint, // hasura graphql instance
    cache: new InMemoryCache()
  })

  return client;
}

export const test = async () => {

  const client = await graphqlClient();

  client.query({
      query: gql`
      query LabelElements {
        labelElements {
          width
        }
      }
    `,
    
    })
    .then((data: any) => console.log(data))
    .catch((error: any) => console.error(error));
}