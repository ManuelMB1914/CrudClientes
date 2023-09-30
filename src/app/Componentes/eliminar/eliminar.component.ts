import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Entidades/Clientes'; 
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  clientes:Clientes = new Clientes();

  ngOnInit(): void {
  }

  buscar(){
    let id = localStorage.getItem("id");
    this.clientes.idCliente = Number(id);

    this.service.buscarC(this.clientes).subscribe(data=>{
      this.clientes = data;
    });
  }//cierra buscar

  eliminar(){
    this.service.eliminarC(this.clientes).subscribe( data =>{ 
      alert("Se elimino la consola "+this.clientes.clienteNombre);
      this.router.navigate(["listar"]);
    });
  }//cierra eliminar

}
