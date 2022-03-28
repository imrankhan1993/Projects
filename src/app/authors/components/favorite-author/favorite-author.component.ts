import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model';


@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {
  favoriteArray :any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
  }

  removeFavorite(e:string) :void{
    this.favoriteArray = this.favoriteArray.filter(item => item._id !== e);
  }

}
