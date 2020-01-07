import _ from "lodash"
import * as url from "url";
import { Configuration } from "../configuration";

import { SearchAllResponse, SearchArtistResponse, SearchAlbumResponse, SearchTrackResponse } from '../../generated/graphql';

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
 */
const DefaultFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
            * Search
            * @param {string} name Artist name(60)
            * @param {string} type Item type(8) [album, artist, playlist, and track]
            * @param {string} limit Limit
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        search(name: string, type: string, limit?: number, options: any = {}): FetchArgs {
            if (_.isUndefined(name)) throw new RequiredError('name', 'Required parameter "name" was not supplied when calling search.');
            if (_.isUndefined(type)) throw new RequiredError('type', 'Required parameter "type" was not supplied when calling search.');

            const localVarPath = `/search?`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = _.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarQueryParameter['q'] = name;
            localVarQueryParameter['type'] = type;
            limit ? localVarQueryParameter['limit'] = limit : undefined;

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
            * Search for All
            * @param {string} name Artist name(60)
            * @param {string} type Item type(8) [album, artist, playlist, and track]
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        searchAll(name: string, type: string, limit?: number, options?: any): (basePath?: string) => Promise<SearchAllResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).search(name, type, limit, options);
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
            * Search for Artists
            * @param {string} name Artist name(60)
            * @param {string} type Item type(8) [album, artist, playlist, and track]
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        searchArtist(name: string, type: string, limit?: number, options?: any): (basePath?: string) => Promise<SearchArtistResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).search(name, type, limit, options);
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
            * Search for Albums
            * @param {string} name Album name(60)
            * @param {string} type Item type(8) [album, artist, playlist, and track]
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        searchAlbum(name: string, type: string, limit?: number, options?: any): (basePath?: string) => Promise<SearchAlbumResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).search(name, type, limit, options);
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
            * Search for Tracks
            * @param {string} name Track name(60)
            * @param {string} type Item type(8) [album, artist, playlist, and track]
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
        */
        searchTrack(name: string, type: string, limit?: number, options?: any): (basePath?: string) => Promise<SearchTrackResponse> {
            const localVarFetchArgs = DefaultFetchParamCreator(configuration).search(name, type, limit, options);
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


export class SearchApi extends BaseApi {
    /**
        * Search for All
        * @summary Searches artists, albums, and tracks with the given name
        * @param {string} name Artist name(60)
        * @param {string} type Item type(8) [album, artist, playlist, and track]
        * @param {string} limit Limit
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public searchAll(name: string, type: string, limit?: number, options?: any) {
        return DefaultFetchInterface(this.configuration).searchAll(name, type, limit, options)(this.basePath);
    }
    /**
        * Search for Artists
        * @summary Searches artists with the given name
        * @param {string} name Artist name(60)
        * @param {string} type Item type(8) [album, artist, playlist, and track]
        * @param {string} limit Limit
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public searchArtist(name: string, type: string, limit?: number, options?: any) {
        return DefaultFetchInterface(this.configuration).searchArtist(name, type, limit, options)(this.basePath);
    }
    /**
        * Search for Albums
        * @summary Searches albums with the given name
        * @param {string} name Artist name(60)
        * @param {string} type Item type(8) [album, artist, playlist, and track]
        * @param {string} limit Limit
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public searchAlbum(name: string, type: string, limit?: number, options?: any) {
        return DefaultFetchInterface(this.configuration).searchAlbum(name, type, limit, options)(this.basePath);
    }
    /**
        * Search for Tracks
        * @summary Searches tracks with the given name
        * @param {string} name Artist name(60)
        * @param {string} type Item type(8) [album, artist, playlist, and track]
        * @param {string} limit Limit
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        * @memberof DefaultApi
    */
    public searchTrack(name: string, type: string, limit?: number, options?: any) {
        return DefaultFetchInterface(this.configuration).searchTrack(name, type, limit, options)(this.basePath);
    }
}