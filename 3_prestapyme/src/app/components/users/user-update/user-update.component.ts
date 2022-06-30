import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    usuario_dni:            ['', Validators.required],
    usuario_nombre:         ['', Validators.required],
    usuario_apellido:       ['', Validators.required],
    usuario_telefono:       ['', Validators.required],
    usuario_direccion:      ['', Validators.required],
    usuario_usuario:        ['', Validators.required],
    usuario_email:          ['', Validators.required],
    usuario_clave_nueva_1:  ['', Validators.required],
    usuario_privilegio:     ['', Validators.required]
  });

  constructor(  private usuarioService: UsuarioService,
                private formBuilder: UntypedFormBuilder,
              ) { }
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}