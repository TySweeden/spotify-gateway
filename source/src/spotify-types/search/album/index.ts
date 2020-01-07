export interface SearchAlbumsResponse {
    albums: [Album];
}

export interface Album {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    albumType:            string;
    artists:              Artist[];
    availableMarkets:     string[];
    externalUrls:         ExternalUrls;
    href:                 string;
    id:                   string;
    images:               Image[];
    name:                 string;
    releaseDate:          string;
    releaseDatePrecision: string;
    totalTracks:          number;
    type:                 string;
    uri:                  string;
}

export interface Artist {
    externalUrls: ExternalUrls;
    href:         string;
    id:           string;
    name:         string;
    type:         string;
    uri:          string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}
