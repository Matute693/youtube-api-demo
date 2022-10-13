import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/videos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos: Video[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {

    this.loadVideos();
 
  }
 
 
  loadVideos() {
    this.youtubeService.getVideos().subscribe(resp => {
      this.videos.push( ...resp )
      console.log(this.videos)
    });

  }

  showVideo( video: Video ) {
    console.log(video)
    Swal.fire({
      title: 'About country',
      html: `
      <iframe width="100%"
        height="315" 
        src="https://www.youtube.com/embed/${ video.resourceId.videoId }" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
      </iframe>`
    })
  }

}
