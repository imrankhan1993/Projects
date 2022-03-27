import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  favoriteArray:any[]=[]
  favoriteIdArray:any[]=[]
  data:any
  constructor(private authorService:AuthorService,
              private paginationService:PaginationService) { }

  @Input() item:any;
  @Output() removeFavoriteEvent =new EventEmitter;

  ngOnInit(): void {
  
    this.checkFavoriteAuthor();
  }

  checkFavoriteAuthor(){
    this.favoriteIdArray = JSON.parse(localStorage.getItem('favoriteData')!);
    if(this.favoriteIdArray){
    this.favoriteIdArray.forEach(element=>{
      this.favoriteIdArray.push(element._id)
    })
  }
  }

  
  addFavorite(e:any){
    if(JSON.parse(localStorage.getItem('favoriteData')!)){
      this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
    }
     this.favoriteArray.push(e);
    localStorage.setItem('favoriteData', JSON.stringify(this.favoriteArray));
    this.checkFavoriteAuthor();
  }

  removeFavorite(e:any){
    if(JSON.parse(localStorage.getItem('favoriteData')!)){
      this.favoriteArray = JSON.parse(localStorage.getItem('favoriteData')!);
      this.favoriteArray = this.favoriteArray.filter(item => item._id !== e._id);
      localStorage.setItem('favoriteData', JSON.stringify(this.favoriteArray));
      this.removeFavoriteEvent.emit(e._id);
      this.checkFavoriteAuthor();
    }

  }

 

}
