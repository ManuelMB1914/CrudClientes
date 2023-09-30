import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Entidades/Clientes';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  clientes:Clientes = new Clientes();

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    let id = localStorage.getItem("id");
    this.clientes.idCliente = Number(id);

    this.service.buscarC(this.clientes).subscribe(data=>{
      this.clientes = data;
    });
  }//cierra buscar

  editar(){
    this.service.editarC(this.clientes).subscribe( data =>{
      alert("Se edito la consola "+this.clientes.clienteNombre);
      this.router.navigate(["listar"]); 
    });
  }//cierra el listar

}
