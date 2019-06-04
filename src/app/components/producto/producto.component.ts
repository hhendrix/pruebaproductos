import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {

  productosData : any = {};


  constructor(private productos:ProductoService, private route : ActivatedRoute) {
    var idProducto = 0;
    this.route.params.subscribe(params =>{
      idProducto = parseInt(params['id']);
    });

    this.productos.getProductos().subscribe((result: any) =>{
      this.productosData =  result.filter(function(value){
        return parseInt(value.id) == idProducto;
      })[0];
    });


   }


}
