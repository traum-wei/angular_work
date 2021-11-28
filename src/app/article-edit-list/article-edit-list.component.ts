import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../shared/services/article.service';
import { Article } from './../shared/models/article.model';

@Component({
  templateUrl: './article-edit-list.component.html',
  styleUrls: ['./article-edit-list.component.css']
})
export class ArticleEditListComponent implements OnInit {

  articleEditList!: Article[];

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articleService.getArticleList().subscribe((articleList) => {
      this.articleEditList = articleList;
    })
  }

  editArticle(articleId: number): void {
    this.router.navigate([`article-edit/${articleId}`]);
  }

}
