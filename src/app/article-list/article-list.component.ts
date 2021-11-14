import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/models/article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[] = [{
    coverImg: 'https://angular.tw/assets/images/logos/angular/angular.svg',
    createDate: 'November 15, 2021',
    title: 'Angular Day5: Directives',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    },
    {
      coverImg: 'https://angular.tw/assets/images/logos/angular/angular.svg',
      createDate: 'November 10, 2021',
      title: 'Angular Day4: Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    },
    {
      coverImg: 'https://angular.tw/assets/images/logos/angular/angular.svg',
      createDate: 'November 8, 2021',
      title: 'Angular Day3: Angular Core Concepts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  doChangeTitle(newTitle: string): void {
    // this.article.title = newTitle;
  }

}


