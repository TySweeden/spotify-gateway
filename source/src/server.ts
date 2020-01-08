import * as es6p from "es6-promise";
(es6p as any).polyfill();
import 'isomorphic-fetch';

import _ from 'lodash';
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import * as res from './resolvers';
import { getAuthorization } from './spotify-api/token';


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
    console.log(JSON.stringify(authResponse));

    const server = new ApolloServer({
        schema,
        context: ({ req }) => {
            return {req: _.assign(req, {headers: {authorization: authResponse.token_type+" "+authResponse.access_token, expires_in:authResponse.expires_in, scope:authResponse.scope }})}
        }
    });
    
    server.listen({
        port: 4200,
        exclusive: true
    }).then(({ url }) => {
        console.log('Listening at ' + url);
    });
})


