import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ArticleEditComponent } from 'src/app/article-edit/article-edit.component';

@Injectable({
  providedIn: 'root'
})
export class EditArticleGuard implements CanDeactivate<ArticleEditComponent> {

  canDeactivate(
    component: ArticleEditComponent): boolean {
      if (component.articleFormGroup.dirty) {
        const exit = confirm('文章尚未儲存，是否離開？');
        return exit;
      }
    return true;
  }

}
