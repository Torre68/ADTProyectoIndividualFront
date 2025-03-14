import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { RouterLink } from '@angular/router';
import { OrdenadorRestService } from '../ordenador-rest.service';

@Component({
  selector: 'app-listaordenadores',
  imports: [RouterLink],
  templateUrl: './listaordenadores.component.html',
  styleUrl: './listaordenadores.component.scss'
})
export class ListaordenadoresComponent {

  listaOrdenador: Ordenador[]=[];
    constructor (private ordenadorRestService:OrdenadorRestService){
  
      ordenadorRestService.buscarTodos().subscribe((datos)=>{
        this.listaOrdenador=datos;
      })
    }
    public borrar (numserie:number){
      
  
    this.ordenadorRestService.borrar(numserie).subscribe(()=>{
      this.ordenadorRestService.buscarTodos().subscribe((datos)=>{
  
        this.listaOrdenador=datos;
      })
  });
}
public buscarOrdenados(campo: string, orden: string) {
  this.ordenadorRestService.buscarOrdenados(campo, orden).subscribe(data => {
    this.listaOrdenador = data;
  });
}
    
} 
  
    
  
