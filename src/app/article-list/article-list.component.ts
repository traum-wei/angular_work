import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('routeSnapshot', this.route.snapshot);
  }

}


