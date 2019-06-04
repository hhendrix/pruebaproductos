import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  productosData : any[] = [];
  loading = true;

  constructor(private productos:ProductoService, private router:Router) { }

  buscar(termino:string){
    this.loading = false;
    this.productos.getProductos().subscribe( (result: any) =>{
        this.productosData = result.filter(function(value){
          return value.id  ==  parseInt(termino);
        });
    this.loading = true;

    });
  }


  verProducto(item : any){
    var itemId = String(item.id);
     this.router.navigate(['/producto', itemId]);
     console.log(itemId);
   }



}
