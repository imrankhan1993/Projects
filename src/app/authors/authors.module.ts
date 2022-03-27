import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AuthorComponent } from './components/author/author.component';
import { FavoriteAuthorComponent } from './components/favorite-author/favorite-author.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ListItemComponent,
    AuthorComponent,
    FavoriteAuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MaterialModule
  ]
})
export class AuthorsModule { }
