import _ from "lodash"
import * as url from "url";
import { Configuration } from "../configuration";

import { GetCurrentlyPlayingResponse } from '../../generated/graphql';

const BASE_PATH = "https://api.spotify.com/v1".replace(/\/+$/, "");

/**
 *
 * @export
 * @interface FetchAPI
 */
interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseApi
 */
class BaseApi {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * DefaultApi - fetch parameter creator
 */
const DefaultFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
        * Get Currently Playing
        * @summary Fetches the currently playing track
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        currentlyPlaying(options: any = {}): FetchArgs {

            const localVarPath = `/me/player/currently-playing`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = _.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = _.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query)
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = _.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }
    }
}


/**
 * DefaultApi - functional programming interface
 */
const DefaultFetchInterface = function (configuration?: Configuration) {
    return {
        /**
        * Get Currently Playing
        * @summary Fetches the currently playing track
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
       currentlyPlaying(options?: any): (basePath?: string) => Promise<GetCurrentlyPlayingResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).currentlyPlaying(options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        }
    }
}


export class PlayerApi extends BaseApi {
    /**
        * Get Currently Playing
        * @summary Fetches the currently playing track
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public currentlyPlaying(options?: any) {
        return DefaultFetchInterface(this.configuration).currentlyPlaying(options)(this.basePath);
    }
}