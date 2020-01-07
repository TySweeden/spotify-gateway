import {SearchApi} from '../../../spotify-api';
import {SearchInput, SearchArtistResponse} from '../../../generated/graphql';
import _ from "lodash";

export const searchArtist = async (obj: any, { args }: { args: SearchInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new SearchApi();
          
          var response = <any> await api.searchArtist(args.name, "artist", args.limit, options);

          if(!response) throw new Error(JSON.stringify(response));

          //response = _.orderBy(response, ["popularity"]);

          return <SearchArtistResponse> { data: [response.artists], options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
