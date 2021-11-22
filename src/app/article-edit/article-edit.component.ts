import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  articleFormGroup: FormGroup = new FormGroup({
    title: new FormControl(
      'Angular Day7: Reactive Forms',
      { validators: [ Validators.required ] }
    ),
    description: new FormControl(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
      { validators: [ Validators.required ] }
    ),
    createDate: new FormControl(
      'November 15, 2021',
      { validators: [ Validators.required ] }
    ),
    coverImg: new FormControl(
      'https://angular.tw/assets/images/logos/angular/angular.svg',
      { validators: [ Validators.required ] }
    )
  });


  constructor() { }

  ngOnInit(): void {
  }

}
