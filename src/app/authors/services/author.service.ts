import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, fromEvent} from 'rxjs';
import { map} from 'rxjs/operators';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private https: HttpClient) { }
  private url = 'http://api.quotable.io';

  getAllAuthor(data:{limit:number,skip:number}): Observable<Author[]> {
    return this.https.get<Author[]>(this.url + '/authors' , { params:data});
  }
}
