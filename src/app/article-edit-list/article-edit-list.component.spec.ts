import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditListComponent } from './article-edit-list.component';

describe('ArticleEditListComponent', () => {
  let component: ArticleEditListComponent;
  let fixture: ComponentFixture<ArticleEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
