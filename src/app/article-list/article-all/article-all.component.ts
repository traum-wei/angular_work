import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-all',
  templateUrl: './article-all.component.html',
  styleUrls: ['./article-all.component.css']
})
export class ArticleAllComponent implements OnInit {

  articleList!: Article[]

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {
    this.articleService.getArticleList().subscribe((articleList) => {
      this.articleList = articleList;
    })
  }

  ngOnInit(): void {

  }

  viewArticleDetail(articleId: number): void {
    this.router.navigate([`/article-list/${articleId}`])
  }
}
