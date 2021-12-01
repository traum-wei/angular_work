import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleEditListComponent } from './article-edit-list/article-edit-list.component';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { ArticleAllComponent } from './article-list/article-all/article-all.component';
import { LoginGuard } from './shared/guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'article-list',
    component: ArticleListComponent,
    canActivate: [LoginGuard],
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
    canActivate: [LoginGuard],
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
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [LoginGuard],
   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
