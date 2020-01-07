export interface SearchArtistResponse {
    artists: Artists;
}

export interface Artists {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    externalUrls: ExternalUrls;
    followers:    Followers;
    genres:       string[];
    href:         string;
    id:           string;
    images:       Image[];
    name:         string;
    popularity:   number;
    type:         string;
    uri:          string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}
