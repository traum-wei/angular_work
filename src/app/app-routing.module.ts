import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleEditListComponent } from './article-edit-list/article-edit-list.component';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { ArticleAllComponent } from './article-list/article-all/article-all.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'article-list',
    component: ArticleListComponent,
    children: [
      {
        path: '',
        component: ArticleAllComponent
      },
      {
        path: ':articleId',
        component: ArticleDetailComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'article-edit',
    children: [
      {
        path: '',
        component: ArticleEditListComponent,
      },
      {
        path: ':articleId',
        component: ArticleEditComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
