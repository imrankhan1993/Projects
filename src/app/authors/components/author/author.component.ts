import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { Author } from '../../models/author.model';
import { Results } from '../../models/results.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnDestroy {
  public limit: number = 10;
  public skip: number = 0;
  public pageSize: number = 10
  public authorList!: Author;
  isLoading: boolean = true;
  public currentPage: number = 1;
  public pager: any = [];
  public record: any = [];
  private clearSubs$ = new Subject();
  constructor(private authorService: AuthorService,
    private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getAuthorList(this.currentPage);
  }

  public getAuthorList(page: number): void {
    this.skip = this.limit * (page - 1)
    var params = { limit: this.limit, skip: this.skip }
    this.authorService.getAllAuthor(params).pipe(takeUntil(this.clearSubs$), map(data => {
      return {
        totalCount: data.totalCount,
        totalPages: data.totalPages,
        results: data.results
      }
    })).subscribe(response => {
      this.authorList = response;
      this.record = this.authorList.totalCount;
      this.pager = this.paginationService.paginate(this.record, page);
      this.isLoading = false;
    })
  }

  trackByFn(index: number, author: Results) {
    return author._id
  }


  ngOnDestroy(): void {
    this.clearSubs$.next(true);
    this.clearSubs$.complete()
  }

}
