import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/models/article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  article: Article = {
    coverImg: 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg',
    createDate: 'January 1, 2021',
    title: 'Featured Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
  }

  constructor() { }

  ngOnInit(): void {
  }

  doChangeTitle(newTitle: string): void {
    this.article.title = newTitle;
  }

}


