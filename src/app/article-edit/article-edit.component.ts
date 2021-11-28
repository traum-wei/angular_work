import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs';

import { ArticleService } from '../shared/services/article.service';
import { ValidatorUtil } from '../shared/util/validator.util';
import { Article } from './../shared/models/article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  articleFormGroup: FormGroup = new FormGroup({
    title: new FormControl(
      '',
      { validators: [ Validators.required,
        ValidatorUtil.includesAngularValidatorFn() ] }
    ),
    description: new FormControl(
      '',
      { validators: [ Validators.required ] }
    ),
    createDate: new FormControl(
      '',
      { validators: [ Validators.required ] }
    ),
    coverImg: new FormControl(
      '',
      { validators: [ Validators.required ] }
    )
  });


  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params) => params.get('articleId')),
      switchMap((articleId) => this.articleService.getArticleById(+articleId!))
    ).subscribe((article) => {
      this.articleFormGroup.patchValue(article);
    })
  }

  onArticleChange(article: Article): void {
    this.route.paramMap.pipe(
      map((params) => params.get('articleId')),
      switchMap((articleId) => this.articleService.editArticle(+articleId!, article!))
    ).subscribe((res) => {})
  }

}
