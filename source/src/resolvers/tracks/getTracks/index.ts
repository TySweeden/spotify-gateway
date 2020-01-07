import { TracksApi } from '../../../spotify-api';
import { GetTracksInput, GetTracksResponse, TrackItem } from '../../../generated/graphql';
import _ from "lodash";
//import {graphqlClient} from '../../../client';

export const getTracks = async (obj: any, { args }: { args: GetTracksInput }, context: any, info: any) => {
    try {
        var options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${context.req.headers.authorization}`
            }
        };

        var tracks: Array<TrackItem> = [];
        const api = new TracksApi();

        await Promise.all(_.map(args.ids, async trackId => {
            var response = <any>await api.getTrackById(trackId, options);

            if (!response) throw new Error(JSON.stringify(response))

            tracks.push(<TrackItem> response)
        }));

        return <GetTracksResponse>{ data: tracks, options: JSON.stringify(options) };

    } catch (error) {
        console.log(error)

        if (error.statusText)
            throw new Error(JSON.stringify(error));
        else throw error;
    }
}
