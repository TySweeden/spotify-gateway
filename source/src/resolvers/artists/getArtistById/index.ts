import {ArtistsApi} from '../../../spotify-api';
import {GetItemInput, GetArtistResponse} from '../../../generated/graphql';

export const getArtistById = async (obj: any, { args }: { args: GetItemInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new ArtistsApi();
          
          var response = <any> await api.getArtistById(args.id, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <GetArtistResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
