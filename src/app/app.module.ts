import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { HasAdminPermissionDirective } from './shared/directives/has-admin-permission.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleCardComponent,
    HasAdminPermissionDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
