import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAuthorComponent } from './favorite-author.component';

describe('FavoriteAuthorComponent', () => {
  let component: FavoriteAuthorComponent;
  let fixture: ComponentFixture<FavoriteAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
