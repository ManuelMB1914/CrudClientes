import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Entidades/Clientes';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private router:Router, private service : ServiceService) { }

  clientes! : Clientes[];

  ngOnInit(): void { 
    this.service.listarC().subscribe(data=>{
      this.clientes = data;
      console.log("Lista de clientes" + JSON.stringify(this.clientes));
    })
  }

  editar(clientes : Clientes){
    localStorage.setItem("id", clientes.idCliente.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(clientes : Clientes){
    localStorage.setItem("id", clientes.idCliente.toString());
    this.router.navigate(["eliminar"]);
  }

}
