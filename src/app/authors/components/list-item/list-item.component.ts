import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  favoriteArray:any[]=[]
  favoriteIdArray:any[]=[]
  constructor(private authorService:AuthorService,
              private paginationService:PaginationService) { }

  @Input() item:any;
  @Output() removeFavoriteEvent =new EventEmitter;

  ngOnInit(): void {
  
    this.checkFavoriteAuthor();
  }

 public checkFavoriteAuthor() : void{
    this.favoriteIdArray = JSON.parse(localStorage.getItem('favoriteData')!);
    if(this.favoriteIdArray){
    this.favoriteIdArray.forEach(element=>{
      this.favoriteIdArray.push(element._id)
    })
  }
  }

  
public addFavorite(favoriteAuthor:any) : void{
    if(JSON.parse(localStorage.getItem('favoriteData')!)){
      this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
    }
     this.favoriteArray.push(favoriteAuthor);
    localStorage.setItem('favoriteData', JSON.stringify(this.favoriteArray));
    this.checkFavoriteAuthor();
  }

public removeFavorite(element:any) : void {
    if(JSON.parse(localStorage.getItem('favoriteData')!)){
      this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
      this.favoriteArray = this.favoriteArray.filter(item => item._id !== element._id);
      localStorage.setItem('favoriteData', JSON.stringify(this.favoriteArray));
      this.removeFavoriteEvent.emit(element._id);
      this.checkFavoriteAuthor();
    }

  }

 

}
