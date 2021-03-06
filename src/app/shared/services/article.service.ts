import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/article/${id}`);
  }

  getArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/article`);
  }

  editArticle(articleId: number,article: Article): any {
    return this.http.patch(`http://localhost:3000/article/${articleId}`, article);
  }

}

