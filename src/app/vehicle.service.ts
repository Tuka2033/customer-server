import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  httpClient:HttpClient
  

  url='http://localhost:8080/user/Vehicle'

  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }


  getVehicles(){
    return this.httpClient.get(this.url)
    
  }

}
