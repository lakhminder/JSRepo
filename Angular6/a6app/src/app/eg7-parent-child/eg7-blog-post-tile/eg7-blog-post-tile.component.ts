import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

/**
 * Refer eg7-blog-post-list.component
 */
@Component({
  selector: 'app-eg7-blog-post-tile',
  templateUrl: './eg7-blog-post-tile.component.html',
  styleUrls: ['./eg7-blog-post-tile.component.css']
})
export class Eg7BlogPostTileComponent implements OnInit {

  @Input('postTile') post : BlogPost;

  constructor() { }

  ngOnInit() {
  }

  printTitleToConsole(){
    console.log(this.post.title);
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav;
  }

}
