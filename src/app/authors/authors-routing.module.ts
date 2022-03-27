import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { FavoriteAuthorComponent } from './components/favorite-author/favorite-author.component';

import { ListItemComponent } from './components/list-item/list-item.component';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path: 'favorite-authors',
    component: FavoriteAuthorComponent
  },
  {
    path: 'list',
    component: ListItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
