import {ArtistsApi} from '../../../spotify-api';
import {GetItemInput, GetArtistAlbumsResponse} from '../../../generated/graphql';

export const getArtistAlbums = async (obj: any, { args }: { args: GetItemInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new ArtistsApi();

          var response = <any> await api.getArtistAlbums(args.id, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <GetArtistAlbumsResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
