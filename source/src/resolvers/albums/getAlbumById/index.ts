import {AlbumsApi} from '../../../spotify-api';
import {GetItemInput, GetAlbumResponse} from '../../../generated/graphql';

export const getAlbumById = async (obj: any, { args }: { args: GetItemInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new AlbumsApi();
          
          var response = <any> await api.getAlbumById(args.id, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <GetAlbumResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
