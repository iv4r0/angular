import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl = 'http://localhost:8001/usuario/listar';

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl);
  }

  constructor(private http: HttpClient) { }
}