import _ from "lodash"
import * as url from "url";
import { Configuration } from "../configuration";

import { GetArtistResponse, GetArtistTopTracksResponse, GetArtistAlbumsResponse } from '../../generated/graphql';

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
            * Get Artist By ID
            * @param {string} id Artist ID name(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getArtistById(id: string, options: any = {}): FetchArgs {
            if (_.isUndefined(id)) throw new RequiredError('name', 'Required parameter "id" was not supplied when calling getArtistById.');

            const localVarPath = `/artists/${id}?`;
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
            * Get Artist By ID
            * @param {string} id Artist ID name(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getArtistTopTracks(id: string, country: string, options: any = {}): FetchArgs {
            if (_.isUndefined(id)) throw new RequiredError('name', 'Required parameter "id" was not supplied when calling getArtistTopTracks.');
            if (_.isUndefined(country)) throw new RequiredError('name', 'Required parameter "country" was not supplied when calling getArtistTopTracks.');

            const localVarPath = `/artists/${id}/top-tracks?`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = _.assign({ method: 'GET' }, options);
            const localVarQueryParameter = {} as any;

            localVarQueryParameter['country'] = country;

            localVarUrlObj.query = _.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query)
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = _.assign({}, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },


        /**
            * Get Artist Albums
            * @param {string} id Artist ID name(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
       getArtistAlbums(id: string, options: any = {}): FetchArgs {
            if (_.isUndefined(id)) throw new RequiredError('name', 'Required parameter "id" was not supplied when calling getArtistAlbums.');

            const localVarPath = `/artists/${id}/albums?`;
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
    }
}


/**
 * DefaultApi - functional programming interface
 * @export
 */
const DefaultFetchInterface = function (configuration?: Configuration) {
    return {
        /**
            * Get Artist By ID
            * @param {string} id Artist ID id(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getArtistById(id: string, options?: any): (basePath?: string) => Promise<GetArtistResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).getArtistById(id, options);
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
            * Get Artist Top Tracks
            * @param {string} id Artist ID id(60)
            * @param {string} country Country Code country(2)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getArtistTopTracks(id: string, country: string, options?: any): (basePath?: string) => Promise<GetArtistTopTracksResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).getArtistTopTracks(id, country, options);
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
            * Get Artist Albums
            * @param {string} id Artist ID id(60)
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        getArtistAlbums(id: string, options?: any): (basePath?: string) => Promise<GetArtistAlbumsResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).getArtistAlbums(id, options);
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


export class ArtistsApi extends BaseApi {
    /**
        * Get Artist by ID
        * @summary Get Artist by ID
        * @param {string} id Artist ID id(60)
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public getArtistById(id: string, options?: any) {
        return DefaultFetchInterface(this.configuration).getArtistById(id, options)(this.basePath);
    }

    /**
        * Get Artist Top Tracks
        * @param {string} id Artist ID id(60)
        * @param {string} country Country Code country(2)
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
    */
    public getArtistTopTracks(id: string, country: string, options?: any) {
        return DefaultFetchInterface(this.configuration).getArtistTopTracks(id, country, options)(this.basePath);
    }

    /**
        * Get Artist Albums
        * @param {string} id Artist ID id(60)
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
    */
    public getArtistAlbums(id: string, options?: any) {
        return DefaultFetchInterface(this.configuration).getArtistAlbums(id, options)(this.basePath);
    }
}