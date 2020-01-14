import {SearchApi} from '../../../spotify-api';
import {SearchInput, SearchAllResponse} from '../../../generated/graphql';
import _ from "lodash";

export const searchAll = async (obj: any, { args }: { args: SearchInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          };

          _.assign(options.headers, context.req.headers);

          console.log(options)

          const api = new SearchApi();
          
          var response = <any> await api.searchAll(args.name, "artist,album,track", args.limit, options);

          if(!response) throw new Error(JSON.stringify(response))
          
          return <SearchAllResponse> { data: response, options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
