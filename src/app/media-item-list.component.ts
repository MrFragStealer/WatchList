import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  onMediaItemDelete(mediaItem){}

  mediaItems = [{
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: null,
    isFavorite: false
  },
  {
    id: 2,
    name: "Cattleman's Ranch",
    medium: "Movies",
    category: "Drama",
    year: 2011,
    watchedOn: 43243243,
    isFavorite: false
  },
  {
    id: 3,
    name: "Fantastic 4",
    medium: "Movies",
    category: "Science Fiction, Comedy",
    year: 2011,
    watchedOn: 43333243,
    isFavorite: true
  },
  {
    id: 4,
    name: "Chanel 0",
    medium: "Series",
    category: "Thriller",
    year: 2011,
    watchedOn: 41113243,
    isFavorite: true
}];

  constructor() { }

  ngOnInit() {
  }

}
