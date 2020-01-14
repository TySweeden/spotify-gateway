import * as es6p from "es6-promise";
(es6p as any).polyfill();
import 'isomorphic-fetch';

import _ from 'lodash';
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import * as res from './resolvers';
import { getAuthorization } from './spotify-api/token';

import * as config from '../static/config.json';


const typeDefs = importSchema('./src/graphql/schema.graphql')

const resolvers = {
    Query: {
        searchAll: res.searchAll,
        searchArtist: res.searchArtist,
        searchAlbum: res.searchAlbum,
        searchTrack: res.searchTrack,

        getArtistById: res.getArtistById,
        getArtistAlbums: res.getArtistAlbums,
        getArtistTopTracks: res.getArtistTopTracks,
        
        getAlbumById: res.getAlbumById,
        getAlbumTracks: res.getAlbumTracks,

        getTrackById: res.getTrackById,
        getTracks: res.getTracks,

        getCurrentlyPlaying: res.getCurrentlyPlaying
    }//,
    //Mutation: {}
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

var test = new Promise(async (resolve) => {
    var authResponse = await getAuthorization();
    resolve(<any>authResponse);
}).then((authResponse:any) => {
    const server = new ApolloServer({
        schema,
        context: async ({ req }) => {
            console.log(JSON.stringify(authResponse));
            return {req: _.assign(req, 
                {
                    headers: {
                        authorization: authResponse.token_type+" "+authResponse.access_token, 
                        expires_in:authResponse.expires_in, 
                        scope:authResponse.scope,
                        "x-hasura-admin-secret": config.hasuraAdminSecret
                    },
                })}
        }
    });
    
    server.listen({
        port: 4200,
        exclusive: true
    }).then(({ url }) => {
        console.log('Listening at ' + url);

        // spotify does not offer refresh token for my use case -
        // instead just re-auth the session before the token expires
        setInterval(async () => {
            console.log("Authorize spotify session");
            var request = await new Promise(async (resolve) => {
                authResponse = await getAuthorization();
                resolve(<any>authResponse);
            }).then((authResponse:any) => {
                return authResponse;
            })

            return request;
        }, (authResponse.expires_in - 1000) * 1000);
    });
})


