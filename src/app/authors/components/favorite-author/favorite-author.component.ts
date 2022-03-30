import { Component, OnInit } from '@angular/core';
import { Results } from '../../models/results.model';


@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {
  public favoriteArray :Results[]=[]
  constructor() { }

  ngOnInit(): void {
    this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
  }

 public removeFavorite(e:string) :void{
    this.favoriteArray = this.favoriteArray.filter(item => item._id !== e);
  }

  trackByFn(index: number, author: Results) {
    return author._id
  }

}
