import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article!: Article;
  @Output() changeTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTitle(): void {
    this.changeTitle.emit('Title Changed!!!!!');
  }

}
