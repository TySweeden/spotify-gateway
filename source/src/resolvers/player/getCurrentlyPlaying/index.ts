import { PlayerApi } from '../../../spotify-api';
import { GetCurrentlyPlayingResponse } from '../../../generated/graphql';
import _ from "lodash";
//import {graphqlClient} from '../../../client';

export const getCurrentlyPlaying = async (obj: any, { args }: { args: any }, context: any, info: any)  => {
    try {
        var options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${context.req.headers.authorization}`
            }
        };

        const api = new PlayerApi();
          
        var response = <any> await api.currentlyPlaying(options);

        if(!response) throw new Error(JSON.stringify(response))

        return <GetCurrentlyPlayingResponse> { data: response, options: JSON.stringify(options) };

    } catch (error) {
        console.log(error)

        if (error.statusText)
            throw new Error(JSON.stringify(error));
        else throw error;
    }
}
