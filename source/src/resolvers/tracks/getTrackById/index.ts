import {TracksApi} from '../../../spotify-api';
import {GetItemInput, GetTrackItemResponse} from '../../../generated/graphql';

export const getTrackById = async (obj: any, { args }: { args: GetItemInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new TracksApi();
          
          var response = <any> await api.getTrackById(args.id, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <GetTrackItemResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
