import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map, switchMap } from 'rxjs';

import { ArticleService } from './../../shared/services/article.service';
import { Article } from './../../shared/models/article.model';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params) => params.get('articleId')),
      switchMap((articleId) => this.articleService.getArticleById(+articleId!))
    ).subscribe((article) => {
      this.article = article;
    });
  }

  goBack(): void {
    this.router.navigate(['article-list']);
  }

}
