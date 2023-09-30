import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Entidades/Clientes';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router : Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  clientes : Clientes = new Clientes();
  guardar() {
    this.service.guardarC(this.clientes).subscribe(data=>{
      alert("Se guardo el cliente "+this.clientes.clienteNombre);
      this.router.navigate(["listar"]);
    });
  }

}
