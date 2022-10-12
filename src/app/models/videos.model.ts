export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
    publishedAt:            Date;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UCtvsljLC4QHFdI4W9GmQPCA = "UCtvsljLC4qHFdI4W9GmQPcA",
}

export enum ChannelTitle {
    NatureRelaxationMusic = "Nature Relaxation Music",
}

export enum PlaylistID {
    UUtvsljLC4QHFdI4W9GmQPCA = "UUtvsljLC4qHFdI4W9GmQPcA",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres?:  Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}