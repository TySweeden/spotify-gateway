import _ from "lodash"
import * as url from "url";
import { Configuration } from "../configuration";

import { GetAlbumResponse, GetTrackResponse } from '../../generated/graphql';

const BASE_PATH = "https://api.spotify.com/v1".replace(/\/+$/, ""); // search endpoint?

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
 * @export
 */
const DefaultFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
            * Get Album By ID
            * @param {string} id Album ID id(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getAlbumById(id: string, options: any = {}): FetchArgs {
            if (_.isUndefined(id)) throw new RequiredError('name', 'Required parameter "id" was not supplied when calling getAlbumById.');

            const localVarPath = `/albums/${id}?`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = _.assign({ method: 'GET' }, options);

            localVarUrlObj.query = _.assign({}, localVarUrlObj.query, options.query)
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = _.assign({}, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
            * Get Album Tracks
            * @param {string} id Album ID id(60)
            * @param {number} limit Limit limit
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getAlbumTracks(id: string, limit?: number, options: any = {}): FetchArgs {
            // verify required parameter 'PUNO' is not null or undefined
            if (_.isUndefined(id)) throw new RequiredError('name', 'Required parameter "id" was not supplied when calling getAlbumTracks.');

            const localVarPath = `/albums/${id}/tracks?`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = _.assign({ method: 'GET' }, options);
            const localVarQueryParameter = {} as any;

            limit ? localVarQueryParameter['limit'] = limit : undefined;

            localVarUrlObj.query = _.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query)
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = _.assign({}, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },


    }
}


/**
 * DefaultApi - functional programming interface
 * @export
 */
const DefaultFetchInterface = function (configuration?: Configuration) {
    return {
        /**
            * Get Album By ID
            * @param {string} id Album ID id(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getAlbumById(id: string, options?: any): (basePath?: string) => Promise<GetAlbumResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).getAlbumById(id, options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },

        /**
            * Get Album Tracks
            * @param {string} id Album ID id(60)
            * @param {number} limit Limit limit
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getAlbumTracks(id: string, limit?: number, options?: any): (basePath?: string) => Promise<GetTrackResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).getAlbumTracks(id, limit, options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
}


export class AlbumsApi extends BaseApi {
    /**
        * Get Artist by ID
        * @summary Get Artist by ID
        * @param {string} id Artist ID id(60)
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public getAlbumById(id: string, options?: any) {
        return DefaultFetchInterface(this.configuration).getAlbumById(id, options)(this.basePath);
    }

    /**
        * Get Album Tracks
        * @param {string} id Artist ID id(60)
        *  @param {number} limit Limit limit
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
    */
    public getAlbumTracks(id: string, limit?: number, options?: any) {
        return DefaultFetchInterface(this.configuration).getAlbumTracks(id, limit, options)(this.basePath);
    }

}