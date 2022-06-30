import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  nuevoUsuarioOut?: Usuario;

  checkoutForm = this.formBuilder.group({
    dni:            ['', Validators.required],
    nombres:         ['', Validators.required],
    apellidos:       ['', Validators.required],
    telefono:       ['', Validators.required],
    direccion:      ['', Validators.required],
    login:        ['', Validators.required],
    email:          ['', Validators.required],
    password:  ['', Validators.required],
    acces:     ['', Validators.required]
  });

  constructor(  private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.add(this.checkoutForm.value);
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  add(nuevoUsuario: Usuario):void {
    this.usuarioService.add(nuevoUsuario).subscribe(resp => { this.nuevoUsuarioOut = resp; });
  }
}
