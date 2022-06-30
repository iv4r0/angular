import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Usuarios : Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.usuarioService.get()
    .subscribe( resp => this.Usuarios = resp);
  }
}
