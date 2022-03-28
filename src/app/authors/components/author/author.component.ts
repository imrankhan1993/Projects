import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnDestroy {
  limit:number=10;
  skip:number=0;
  pageSize:number=10
  authorList:any=[];
  isLoading :boolean = true;
  currentPage :number = 1;
  pager: any = [];
  record: any = [];
  subscription!:Subscription
  constructor(private authorService:AuthorService,
    private paginationService:PaginationService) { }

  ngOnInit(): void {
    this.getAuthorList(this.currentPage);
  }

  getAuthorList(page:number) : void{
    this.skip=this.limit*(page-1)
    var params={limit:this.limit,skip:this.skip}
    this.subscription=this.authorService.getAllAuthor(params).subscribe(response=>{
      this.authorList=response;
      this.record = this.authorList.totalCount;
      this.pager = this.paginationService.paginate(this.record,page);
      this.isLoading = false;
    })
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
