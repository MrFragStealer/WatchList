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
    name: "Superman",
    medium: "Movies",
    category: "Science Fiction",
    year: 2011,
    watchedOn: 43243243,
    isFavorite: false
  },
{
  id: 3,
      name: "Fantastic 4",
    medium: "Movies",
    category: "Science Fiction",
    year: 2011,
    watchedOn: 43333243,
    isFavorite: false
},
{
  id: 4,
      name: "Chanel 0",
    medium: "Series",
    category: "Science Fiction",
    year: 2011,
    watchedOn: 41113243,
    isFavorite: false
}];

  constructor() { }

  ngOnInit() {
  }

}
