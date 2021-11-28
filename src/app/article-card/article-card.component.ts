import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article!: Article;
  @Output() viewDetail = new EventEmitter<number>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onViewDetail(): void {
    this.viewDetail.emit(this.article.id);
  }

  editArticle(): void {
    this.router.navigate([`article-edit/${this.article.id}`]);
  }

}
