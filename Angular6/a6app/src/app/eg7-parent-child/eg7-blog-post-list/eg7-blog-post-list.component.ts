import { Component, OnInit, ViewChild, ViewChildren, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { Eg7BlogPostTileComponent } from '../eg7-blog-post-tile/eg7-blog-post-tile.component';
import { QueryList } from '@angular/core';


/**
 * So this(blog-post-list) will act as parent component for blog-post-tile component
 * and paginator component
 * blog-post-list will send total number of pages to Paginator
 * Paginator component will emit events to parent component for specific page
 * 
 * 1) Create a model class
 *  ng g class eg7-parent-child/blog-post
 * 2) create Components
 *  ng g c eg7-parent-child/eg7-blog-post-list
 *  ng g c eg7-parent-child/eg7-blog-post-tile
 *  ng g c eg7-parent-child/eg7-paginator
 * 
 * @Input is always data
 * @Output is always an event
 * 
 * Also View Encapsulation is given by default as Emulated
 * which means styles are local to component with angular putting some param to each style
 * 
 * But if you do not want that(may be your component is shared and used across many places and
 * you donot want to make different copies of same style i.e just to make style.css lightweight)
 * you can use None 
 * 
 * host selector is used to refer the parent tag in child component
 * else we have to apply style within the parent component itself(refer eg7-blog-post-tile.component.css)
 * 
 * @ViewChild('tile') is used to refer the Child component instance 
 * with specific template reference variable (#tile) in parent component
 * 
 * @ViewChildren && QueryList<> is used to refer multiple child Components Objects
 * 
 * ngClass is used to apply html class to tag(html) based on some condition i.e dynamic styling
 * Basically a button would toggle/mark the Favorite by changing background color.
 * refer blog-post.ts and eg7-blog-post-tile(component and html/css)
 * 
 * changeDetectionStrategy (refer tutorial 19 for detail)
 * 1) Default => angular detect changes at each level even at nested object's properties
 * 2) OnPush => Asks angular to only detect change in top/input Object reference.
 *            this is handy when your component tree has complex structure and/or you want 
 *            Imutable objects to use.
 * 
 */
@Component({
  selector: 'app-eg7-blog-post-list',
  templateUrl: './eg7-blog-post-list.component.html',
  styleUrls: ['./eg7-blog-post-list.component.css']
  //,encapsulation: ViewEncapsulation.Emulated     //Default
  //,encapsulation: ViewEncapsulation.None         //to apply same copy elsewhere basicaly 
  //removing angular params in styles to make it global, 
  //Rest options are there for browser specific usage in future
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class Eg7BlogPostListComponent implements OnInit {

  //blogPosts : BlogPost[] = [];
  blogPosts : BlogPost[][];//[Pages][Posts in page]
  currentPage : number;
  //For Single Component
  //@ViewChild('tile') eg7BlogPostTileComponent : Eg7BlogPostTileComponent;
  //For Multiple Components
  @ViewChildren('tile') tileComponentsList : QueryList<Eg7BlogPostTileComponent>;

  constructor() { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = [
      // Page 1
      [
        {
          title: 'Post 1',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 2',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 3',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 4',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        }
      ],
      // Page 2
      [
        {
          title: 'Post 5',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 6',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 7',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 8',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        }
      ],
      // Page 3
      [
        {
          title: 'Post 9',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 10',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 11',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        },
        {
          title: 'Post 12',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis turpis at ipsum hendrerit, vel porttitor velit ultrices.'
        }
      ]
    ];
  }

  updatePage(newPage){
    this.currentPage = newPage;
  }

  printAllTitlesToConsole(){
    //this.eg7BlogPostTileComponent.printTitleToConsole();
    this.tileComponentsList.forEach(t => t.printTitleToConsole());
  }
}
