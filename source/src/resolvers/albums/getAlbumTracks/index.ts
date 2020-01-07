import {AlbumsApi} from '../../../spotify-api';
import {GetAlbumTracksInput, GetTrackResponse} from '../../../generated/graphql';

export const getAlbumTracks = async (obj: any, { args }: { args: GetAlbumTracksInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new AlbumsApi();
          
          var response = <any> await api.getAlbumTracks(args.id, args.limit || 1, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <GetTrackResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
