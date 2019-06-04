import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {


  textoPromociones = [
    {
      Titulo:"Tv & Video",
      Mensaje:"Descuentos hasta el 25% en Video  y televisores"
    },
    {
      Titulo:"Móviles",
      Mensaje:"Las mejores promociones y descuentos en celulares Huawei"
    },
    {
      Titulo:"Cámaras Fotográficas" ,
      Mensaje:"Descuento en todo tipo de cámaras"
    },
    {
      Titulo:"Accesorios",
      Mensaje:"Todos los accesorios para equipos de computo a los mejores precios"
    },
    {
      Titulo:"Software",
      Mensaje:"Descuento en oficce 365 hasta el 50%"
    }
  ];

  indexTexto = 0;

  productosData : any[] = [];
  loading = false;
  contactenos = false;
  pathImage : string = "assets/img/Rebajas.png";


  constructor( private productos:ProductoService, private router:Router) {
    
     this.selectProductoData("TV");
   }


   selectProductoData(selectData:string){
    
    this.loading = false;
    this.contactenos = false;
    this.productosData=[];
    

    this.productos.getProductos().subscribe( (result: any) =>{

      switch(selectData){
        case "TV":
            this.productosData	= result.filter(function(value){
                return parseInt(value.albumId) < 10;
            });
            this.pathImage  = "assets/img/tvyvideo.png";
            this.indexTexto = 0;
          break;
          case "Mobile":
              this.productosData	= result.filter(function(value){
                return parseInt(value.albumId) > 10 && parseInt(value.albumId) < 20;
            });
            this.pathImage  = "assets/img/mobile.png";
            this.indexTexto = 1;
            break;
          case "Camara":
              this.productosData	= result.filter(function(value){
                return parseInt(value.albumId) > 20 && parseInt(value.albumId) < 40;
            });
            this.pathImage  = "assets/img/camaras.png";
            this.indexTexto = 2;
            break;
            case "Accesorio":
                this.productosData	= result.filter(function(value){
                  return parseInt(value.albumId) > 40 && parseInt(value.albumId) < 60;
              });
              this.pathImage  = "assets/img/accesorios.png";
              this.indexTexto = 3;
            break;
            case "Software":
                this.productosData	= result.filter(function(value){
                  return parseInt(value.albumId) > 60 && parseInt(value.albumId) < 80;
              });
              this.pathImage  = "assets/img/software.png";
              this.indexTexto = 4;
            break;
            case "Contactenos":
              this.contactenos = true;
              break;
      }
      this.loading = true;
    });
 
   }

   verProducto(item : any){
    var itemId = String(item.id);
     this.router.navigate(['/producto', itemId]);
   }
  

}
