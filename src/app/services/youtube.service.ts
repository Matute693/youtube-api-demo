import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { YoutubeResponse } from '../models/videos.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

    private youtubeUrl  = 'https://www.googleapis.com/youtube/v3';
    private ApiKey  = 'AIzaSyDeUC7Vm9MCqowFqLyYAL6EOoaqlsW_SwY';
    private playlist  = 'UUtvsljLC4qHFdI4W9GmQPcA';
    private nextPageToken  = '';

  constructor( private http: HttpClient) {  }
  
  
  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('key', this.ApiKey)
      .set('part', 'snippet')
      .set('playlistId', this.playlist)
      .set('maxResults', '20')
      .set('pagePageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(
        map( resp => {
          this.nextPageToken = resp.nextPageToken
          this.nextPageToken.length - 10
          return resp.items;
        }),
        map( items => items.map( item => item.snippet ))
      );
  }

}
