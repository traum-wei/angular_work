import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { HasAdminPermissionDirective } from './shared/directives/has-admin-permission.directive';
import { LoginComponent } from './login/login.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ErrorHandleInterceptor } from './shared/interceptor/error-handle.interceptor';
import { ArticleAllComponent } from './article-list/article-all/article-all.component';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleCardComponent,
    HasAdminPermissionDirective,
    LoginComponent,
    ArticleEditComponent,
    ArticleAllComponent,
    ArticleDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandleInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
