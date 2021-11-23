import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../shared/services/article.service';
import { ValidatorUtil } from '../shared/util/validator.util';
 
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
 
 
  constructor(private articleService: ArticleService) { }
 
  ngOnInit(): void {
    this.articleService.getArticleById(1).subscribe(article => {
      this.articleFormGroup.patchValue(article);
    });
  }
 
}
