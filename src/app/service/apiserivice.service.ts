import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiseriviceService {
  uniersi:string = "http://universities.hipolabs.com/search?country=";
  constructor( private http:HttpClient) { }
  getUnis(){
    return this.http.get(this.uniersi);
  }

  getUniPais( busc: String ):Observable<any>{
    let urlbusc = `${ this.uniersi }${ busc }`;
    return this.http.get( urlbusc );
  }

}
