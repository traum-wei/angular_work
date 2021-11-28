import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewArticleList(queryParams?: { page: number, size: number}): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        page: 1,
        size: 10,
      }
    }
    if (queryParams) {
      navigationExtras.queryParams = queryParams;
    };
    this.router.navigate(['article-list'], navigationExtras);
  }

}
