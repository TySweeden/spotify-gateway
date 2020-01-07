import {SearchApi} from '../../../spotify-api';
import {SearchInput, SearchTrackResponse} from '../../../generated/graphql';

export const searchTrack = async (obj: any, { args }: { args: SearchInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new SearchApi();
          
          var response = <any> await api.searchTrack(args.name, "track", args.limit, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <SearchTrackResponse> { data: [response.tracks], options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
