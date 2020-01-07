import {ArtistsApi} from '../../../spotify-api';
import {GetArtistTopTracksInput, GetArtistTopTracksResponse} from '../../../generated/graphql';

export const getArtistTopTracks = async (obj: any, { args }: { args: GetArtistTopTracksInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new ArtistsApi();
          
          var response = <any> await api.getArtistTopTracks(args.id, args.country, options);

          if(!response) throw new Error(JSON.stringify(response))
          
          return <GetArtistTopTracksResponse> { data: response.tracks, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
