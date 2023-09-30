import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../Entidades/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:9010/ClientesWs/';

  listarC(){  
    return this.http.get<Clientes[]>(this.url+'listar');
  }
  
  guardarC(clientes : Clientes){
    return this.http.post<Clientes>(this.url+'guardar', clientes);
  }
  
  buscarC(clientes : Clientes){
    return this.http.post<Clientes>(this.url+'buscar', clientes);
  }
  
  eliminarC(clientes : Clientes){
    return this.http.post<Clientes>(this.url+'eliminar', clientes);
  }
  
  editarC(clientes : Clientes){
    return this.http.post<Clientes>(this.url+'editar', clientes);
  }

}
