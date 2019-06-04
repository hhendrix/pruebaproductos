import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) {
    
   }

   getProductos(){
    return   this.http.get('https://jsonplaceholder.typicode.com/photos');
   }

}
