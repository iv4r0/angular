import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Header } from '../components/header/interfaces/header';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  private headerUrl = 'https://angular-prestapyme-default-rtdb.firebaseio.com/header.json';

  getHeaders(): Observable<Header[]>{
    return this.http.get<Header[]>(this.headerUrl);
  }

  getHeaderById(id: string): Observable<Header[]>{
    return this.http.get<Header[]>(this.headerUrl).pipe(
      map(items => items.filter(item => item.id == id))
    )
  }

  constructor(private http: HttpClient) { }
}
