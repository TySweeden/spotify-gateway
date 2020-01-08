import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Album = {
  __typename?: 'Album',
  href?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<AlbumItem>>>,
  limit?: Maybe<Scalars['Int']>,
  next?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  previous?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type AlbumItem = {
  __typename?: 'AlbumItem',
  album_type?: Maybe<Scalars['String']>,
  artists?: Maybe<Array<Maybe<ArtistBasicItem>>>,
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>,
  external_urls?: Maybe<ExternalUrls>,
  href?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  name?: Maybe<Scalars['String']>,
  release_date?: Maybe<Scalars['String']>,
  release_date_precision?: Maybe<Scalars['String']>,
  total_tracks?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
};

export type Artist = {
  __typename?: 'Artist',
  href?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<ArtistItem>>>,
  limit?: Maybe<Scalars['Int']>,
  next?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  previous?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type ArtistBasicItem = {
  __typename?: 'ArtistBasicItem',
  external_urls?: Maybe<ExternalUrls>,
  href?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
};

export type ArtistItem = {
  __typename?: 'ArtistItem',
  external_urls?: Maybe<ExternalUrls>,
  followers?: Maybe<Followers>,
  genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  href?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  name?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
};

export type External_Ids = {
  __typename?: 'external_ids',
  isrc?: Maybe<Scalars['String']>,
};

export type ExternalUrls = {
  __typename?: 'ExternalUrls',
  spotify?: Maybe<Scalars['String']>,
};

export type Followers = {
  __typename?: 'Followers',
  href?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

/** auth */
export type GetAccessTokenInput = {
  client_id: Scalars['String'],
  scopes: Array<Scalars['String']>,
  redirect_uri?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type GetAlbumResponse = {
  __typename?: 'GetAlbumResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<AlbumItem>,
};

export type GetAlbumTracksInput = {
  id: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
};

export type GetArtistAlbumsResponse = {
  __typename?: 'GetArtistAlbumsResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Album>,
};

export type GetArtistResponse = {
  __typename?: 'GetArtistResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<ArtistItem>,
};

export type GetArtistTopTracksInput = {
  id: Scalars['String'],
  country: Scalars['String'],
};

export type GetArtistTopTracksResponse = {
  __typename?: 'GetArtistTopTracksResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Array<Maybe<TrackItem>>>,
};

export type GetAuthorizationResponse = {
  __typename?: 'GetAuthorizationResponse',
  access_token: Scalars['String'],
  token_type: Scalars['String'],
  expires_in: Scalars['Int'],
  scope?: Maybe<Scalars['String']>,
};

export type GetCurrentlyPlayingResponse = {
  __typename?: 'GetCurrentlyPlayingResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<TrackItem>,
};

export type GetItemInput = {
  id: Scalars['String'],
};

export type GetTrackItemResponse = {
  __typename?: 'GetTrackItemResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<TrackItem>,
};

export type GetTrackResponse = {
  __typename?: 'GetTrackResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Track>,
};

export type GetTracksInput = {
  ids: Array<Scalars['String']>,
};

export type GetTracksResponse = {
  __typename?: 'GetTracksResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Array<Maybe<TrackItem>>>,
};

export type Image = {
  __typename?: 'Image',
  height?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
};

/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type Query = {
  __typename?: 'Query',
  searchAll?: Maybe<SearchAllResponse>,
  searchArtist?: Maybe<SearchArtistResponse>,
  searchAlbum?: Maybe<SearchAlbumResponse>,
  searchTrack?: Maybe<SearchTrackResponse>,
  getArtistById?: Maybe<GetArtistResponse>,
  getAlbumById?: Maybe<GetAlbumResponse>,
  getTrackById?: Maybe<GetTrackItemResponse>,
  getTracks?: Maybe<GetTracksResponse>,
  getArtistTopTracks?: Maybe<GetArtistTopTracksResponse>,
  getArtistAlbums?: Maybe<GetArtistAlbumsResponse>,
  getAlbumTracks?: Maybe<GetTrackResponse>,
  getCurrentlyPlaying?: Maybe<GetCurrentlyPlayingResponse>,
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QuerySearchAllArgs = {
  args: SearchInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QuerySearchArtistArgs = {
  args: SearchInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QuerySearchAlbumArgs = {
  args: SearchInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QuerySearchTrackArgs = {
  args: SearchInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetArtistByIdArgs = {
  args: GetItemInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetAlbumByIdArgs = {
  args: GetItemInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetTrackByIdArgs = {
  args: GetItemInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetTracksArgs = {
  args: GetTracksInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetArtistTopTracksArgs = {
  args: GetArtistTopTracksInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetArtistAlbumsArgs = {
  args: GetItemInput
};


/** 
 * After changes be sure to run command (defined in package.json):
 *     yarn codegen
 * This will update the generated typescript schema
 **/
export type QueryGetAlbumTracksArgs = {
  args: GetAlbumTracksInput
};

export type SearchAlbumResponse = {
  __typename?: 'SearchAlbumResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Array<Maybe<Album>>>,
};

export type SearchAll = {
  __typename?: 'SearchAll',
  albums?: Maybe<Album>,
  artists?: Maybe<Artist>,
  tracks?: Maybe<Track>,
};

export type SearchAllResponse = {
  __typename?: 'SearchAllResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<SearchAll>,
};

export type SearchArtistResponse = {
  __typename?: 'SearchArtistResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Array<Maybe<Artist>>>,
};

export type SearchInput = {
  name: Scalars['String'],
  limit: Scalars['Int'],
};

export type SearchTrackResponse = {
  __typename?: 'SearchTrackResponse',
  options?: Maybe<Scalars['String']>,
  data?: Maybe<Array<Maybe<Track>>>,
};

export type Track = {
  __typename?: 'Track',
  href?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<TrackItem>>>,
  limit?: Maybe<Scalars['Int']>,
  next?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  previous?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type TrackItem = {
  __typename?: 'TrackItem',
  album?: Maybe<AlbumItem>,
  artists?: Maybe<Array<Maybe<ArtistBasicItem>>>,
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>,
  disc_number?: Maybe<Scalars['Int']>,
  duration_ms?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  external_ids?: Maybe<External_Ids>,
  external_urls?: Maybe<ExternalUrls>,
  href?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  is_local?: Maybe<Scalars['Boolean']>,
  is_playable?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  track_number?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  SearchInput: SearchInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  SearchAllResponse: ResolverTypeWrapper<SearchAllResponse>,
  SearchAll: ResolverTypeWrapper<SearchAll>,
  Album: ResolverTypeWrapper<Album>,
  AlbumItem: ResolverTypeWrapper<AlbumItem>,
  ArtistBasicItem: ResolverTypeWrapper<ArtistBasicItem>,
  ExternalUrls: ResolverTypeWrapper<ExternalUrls>,
  Image: ResolverTypeWrapper<Image>,
  Artist: ResolverTypeWrapper<Artist>,
  ArtistItem: ResolverTypeWrapper<ArtistItem>,
  Followers: ResolverTypeWrapper<Followers>,
  Track: ResolverTypeWrapper<Track>,
  TrackItem: ResolverTypeWrapper<TrackItem>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  external_ids: ResolverTypeWrapper<External_Ids>,
  SearchArtistResponse: ResolverTypeWrapper<SearchArtistResponse>,
  SearchAlbumResponse: ResolverTypeWrapper<SearchAlbumResponse>,
  SearchTrackResponse: ResolverTypeWrapper<SearchTrackResponse>,
  GetItemInput: GetItemInput,
  GetArtistResponse: ResolverTypeWrapper<GetArtistResponse>,
  GetAlbumResponse: ResolverTypeWrapper<GetAlbumResponse>,
  GetTrackItemResponse: ResolverTypeWrapper<GetTrackItemResponse>,
  GetTracksInput: GetTracksInput,
  GetTracksResponse: ResolverTypeWrapper<GetTracksResponse>,
  GetArtistTopTracksInput: GetArtistTopTracksInput,
  GetArtistTopTracksResponse: ResolverTypeWrapper<GetArtistTopTracksResponse>,
  GetArtistAlbumsResponse: ResolverTypeWrapper<GetArtistAlbumsResponse>,
  GetAlbumTracksInput: GetAlbumTracksInput,
  GetTrackResponse: ResolverTypeWrapper<GetTrackResponse>,
  GetCurrentlyPlayingResponse: ResolverTypeWrapper<GetCurrentlyPlayingResponse>,
  GetAccessTokenInput: GetAccessTokenInput,
  GetAuthorizationResponse: ResolverTypeWrapper<GetAuthorizationResponse>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  SearchInput: SearchInput,
  String: Scalars['String'],
  Int: Scalars['Int'],
  SearchAllResponse: SearchAllResponse,
  SearchAll: SearchAll,
  Album: Album,
  AlbumItem: AlbumItem,
  ArtistBasicItem: ArtistBasicItem,
  ExternalUrls: ExternalUrls,
  Image: Image,
  Artist: Artist,
  ArtistItem: ArtistItem,
  Followers: Followers,
  Track: Track,
  TrackItem: TrackItem,
  Boolean: Scalars['Boolean'],
  external_ids: External_Ids,
  SearchArtistResponse: SearchArtistResponse,
  SearchAlbumResponse: SearchAlbumResponse,
  SearchTrackResponse: SearchTrackResponse,
  GetItemInput: GetItemInput,
  GetArtistResponse: GetArtistResponse,
  GetAlbumResponse: GetAlbumResponse,
  GetTrackItemResponse: GetTrackItemResponse,
  GetTracksInput: GetTracksInput,
  GetTracksResponse: GetTracksResponse,
  GetArtistTopTracksInput: GetArtistTopTracksInput,
  GetArtistTopTracksResponse: GetArtistTopTracksResponse,
  GetArtistAlbumsResponse: GetArtistAlbumsResponse,
  GetAlbumTracksInput: GetAlbumTracksInput,
  GetTrackResponse: GetTrackResponse,
  GetCurrentlyPlayingResponse: GetCurrentlyPlayingResponse,
  GetAccessTokenInput: GetAccessTokenInput,
  GetAuthorizationResponse: GetAuthorizationResponse,
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlbumItem']>>>, ParentType, ContextType>,
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type AlbumItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumItem'] = ResolversParentTypes['AlbumItem']> = {
  album_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistBasicItem']>>>, ParentType, ContextType>,
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrls']>, ParentType, ContextType>,
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  release_date_precision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  total_tracks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistItem']>>>, ParentType, ContextType>,
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type ArtistBasicItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistBasicItem'] = ResolversParentTypes['ArtistBasicItem']> = {
  external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrls']>, ParentType, ContextType>,
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ArtistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistItem'] = ResolversParentTypes['ArtistItem']> = {
  external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrls']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['Followers']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type External_IdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['external_ids'] = ResolversParentTypes['external_ids']> = {
  isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ExternalUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalUrls'] = ResolversParentTypes['ExternalUrls']> = {
  spotify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type FollowersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Followers'] = ResolversParentTypes['Followers']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type GetAlbumResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAlbumResponse'] = ResolversParentTypes['GetAlbumResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['AlbumItem']>, ParentType, ContextType>,
};

export type GetArtistAlbumsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetArtistAlbumsResponse'] = ResolversParentTypes['GetArtistAlbumsResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>,
};

export type GetArtistResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetArtistResponse'] = ResolversParentTypes['GetArtistResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['ArtistItem']>, ParentType, ContextType>,
};

export type GetArtistTopTracksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetArtistTopTracksResponse'] = ResolversParentTypes['GetArtistTopTracksResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackItem']>>>, ParentType, ContextType>,
};

export type GetAuthorizationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAuthorizationResponse'] = ResolversParentTypes['GetAuthorizationResponse']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  token_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expires_in?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type GetCurrentlyPlayingResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetCurrentlyPlayingResponse'] = ResolversParentTypes['GetCurrentlyPlayingResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['TrackItem']>, ParentType, ContextType>,
};

export type GetTrackItemResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTrackItemResponse'] = ResolversParentTypes['GetTrackItemResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['TrackItem']>, ParentType, ContextType>,
};

export type GetTrackResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTrackResponse'] = ResolversParentTypes['GetTrackResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>,
};

export type GetTracksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTracksResponse'] = ResolversParentTypes['GetTracksResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackItem']>>>, ParentType, ContextType>,
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchAll?: Resolver<Maybe<ResolversTypes['SearchAllResponse']>, ParentType, ContextType, RequireFields<QuerySearchAllArgs, 'args'>>,
  searchArtist?: Resolver<Maybe<ResolversTypes['SearchArtistResponse']>, ParentType, ContextType, RequireFields<QuerySearchArtistArgs, 'args'>>,
  searchAlbum?: Resolver<Maybe<ResolversTypes['SearchAlbumResponse']>, ParentType, ContextType, RequireFields<QuerySearchAlbumArgs, 'args'>>,
  searchTrack?: Resolver<Maybe<ResolversTypes['SearchTrackResponse']>, ParentType, ContextType, RequireFields<QuerySearchTrackArgs, 'args'>>,
  getArtistById?: Resolver<Maybe<ResolversTypes['GetArtistResponse']>, ParentType, ContextType, RequireFields<QueryGetArtistByIdArgs, 'args'>>,
  getAlbumById?: Resolver<Maybe<ResolversTypes['GetAlbumResponse']>, ParentType, ContextType, RequireFields<QueryGetAlbumByIdArgs, 'args'>>,
  getTrackById?: Resolver<Maybe<ResolversTypes['GetTrackItemResponse']>, ParentType, ContextType, RequireFields<QueryGetTrackByIdArgs, 'args'>>,
  getTracks?: Resolver<Maybe<ResolversTypes['GetTracksResponse']>, ParentType, ContextType, RequireFields<QueryGetTracksArgs, 'args'>>,
  getArtistTopTracks?: Resolver<Maybe<ResolversTypes['GetArtistTopTracksResponse']>, ParentType, ContextType, RequireFields<QueryGetArtistTopTracksArgs, 'args'>>,
  getArtistAlbums?: Resolver<Maybe<ResolversTypes['GetArtistAlbumsResponse']>, ParentType, ContextType, RequireFields<QueryGetArtistAlbumsArgs, 'args'>>,
  getAlbumTracks?: Resolver<Maybe<ResolversTypes['GetTrackResponse']>, ParentType, ContextType, RequireFields<QueryGetAlbumTracksArgs, 'args'>>,
  getCurrentlyPlaying?: Resolver<Maybe<ResolversTypes['GetCurrentlyPlayingResponse']>, ParentType, ContextType>,
};

export type SearchAlbumResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchAlbumResponse'] = ResolversParentTypes['SearchAlbumResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
};

export type SearchAllResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchAll'] = ResolversParentTypes['SearchAll']> = {
  albums?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>,
  tracks?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>,
};

export type SearchAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchAllResponse'] = ResolversParentTypes['SearchAllResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['SearchAll']>, ParentType, ContextType>,
};

export type SearchArtistResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchArtistResponse'] = ResolversParentTypes['SearchArtistResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
};

export type SearchTrackResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchTrackResponse'] = ResolversParentTypes['SearchTrackResponse']> = {
  options?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>,
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackItem']>>>, ParentType, ContextType>,
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type TrackItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackItem'] = ResolversParentTypes['TrackItem']> = {
  album?: Resolver<Maybe<ResolversTypes['AlbumItem']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistBasicItem']>>>, ParentType, ContextType>,
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  disc_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  duration_ms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  external_ids?: Resolver<Maybe<ResolversTypes['external_ids']>, ParentType, ContextType>,
  external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrls']>, ParentType, ContextType>,
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  is_local?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  is_playable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  track_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>,
  AlbumItem?: AlbumItemResolvers<ContextType>,
  Artist?: ArtistResolvers<ContextType>,
  ArtistBasicItem?: ArtistBasicItemResolvers<ContextType>,
  ArtistItem?: ArtistItemResolvers<ContextType>,
  external_ids?: External_IdsResolvers<ContextType>,
  ExternalUrls?: ExternalUrlsResolvers<ContextType>,
  Followers?: FollowersResolvers<ContextType>,
  GetAlbumResponse?: GetAlbumResponseResolvers<ContextType>,
  GetArtistAlbumsResponse?: GetArtistAlbumsResponseResolvers<ContextType>,
  GetArtistResponse?: GetArtistResponseResolvers<ContextType>,
  GetArtistTopTracksResponse?: GetArtistTopTracksResponseResolvers<ContextType>,
  GetAuthorizationResponse?: GetAuthorizationResponseResolvers<ContextType>,
  GetCurrentlyPlayingResponse?: GetCurrentlyPlayingResponseResolvers<ContextType>,
  GetTrackItemResponse?: GetTrackItemResponseResolvers<ContextType>,
  GetTrackResponse?: GetTrackResponseResolvers<ContextType>,
  GetTracksResponse?: GetTracksResponseResolvers<ContextType>,
  Image?: ImageResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SearchAlbumResponse?: SearchAlbumResponseResolvers<ContextType>,
  SearchAll?: SearchAllResolvers<ContextType>,
  SearchAllResponse?: SearchAllResponseResolvers<ContextType>,
  SearchArtistResponse?: SearchArtistResponseResolvers<ContextType>,
  SearchTrackResponse?: SearchTrackResponseResolvers<ContextType>,
  Track?: TrackResolvers<ContextType>,
  TrackItem?: TrackItemResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
