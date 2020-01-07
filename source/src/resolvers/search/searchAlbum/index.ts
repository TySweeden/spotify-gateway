import {SearchApi} from '../../../spotify-api';
import {SearchInput, SearchAlbumResponse} from '../../../generated/graphql';

export const searchAlbum = async (obj: any, { args }: { args: SearchInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `${context.req.headers.authorization}`
            }
          };

          const api = new SearchApi();
          
          var response = <any> await api.searchArtist(args.name, "album", args.limit, options);

          if(!response) throw new Error(JSON.stringify(response))

          return <SearchAlbumResponse> { data: [response.albums], options: JSON.stringify(options) };

    } catch(error) {
        console.log(error)

        if(error.statusText) 
          throw new Error(JSON.stringify(error));
        else throw error;
    }
}
