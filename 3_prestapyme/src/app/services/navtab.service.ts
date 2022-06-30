import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Navtab } from '../components/nav/tab/interfaces/navtab';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavtabService {

  private navtabUrl = 'https://angular-prestapyme-default-rtdb.firebaseio.com/navtab.json';

  getNavTabs(): Observable<Navtab[]>{
    return this.http.get<Navtab[]>(this.navtabUrl);
  }

  getNavTabById(id: string): Observable<Navtab[]>{
    return this.http.get<Navtab[]>(this.navtabUrl).pipe(
      map(items => items.filter(item => item.id == id))
    )
  }

  constructor(private http: HttpClient) { }
}
