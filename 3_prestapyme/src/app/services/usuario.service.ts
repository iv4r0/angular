import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl = 'https://microservicios-prestapyme.herokuapp.com/usuario';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string){
    console.log(`UsuarioService: ${message}`);
  }

  get(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl + '/listar')
    .pipe(
      tap(_ => this.log('usuarios encontrados')),
      catchError(this.handleError<Usuario[]>('getUsuario',[]))
    );
  }

    /** POST: add a new hero to the server */
    add(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.usuarioUrl + '/guardar', usuario, this.httpOptions).pipe(
        tap((newUsuario: Usuario) => this.log(`added usuario w/ id=${newUsuario.id}`)),
        catchError(this.handleError<Usuario>('addUsuario'))
      );
    }

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}