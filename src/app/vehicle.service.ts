import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/user/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpclient:HttpClient) { }
  getAllVehicle()
  { 
    const result = this.httpclient.get(baseUrl)
    return result
    
  }
  getVehicleById(id)
  { 
    const result = this.httpclient.get(`${baseUrl}/${id}`)
    return result
    
  }
  updateVehicleById(id,data)
  { 
    const result = this.httpclient.put(`${baseUrl}/${id}`,data)
    return result
    
  }
  deleteVehicleById(id)
  { 
    const result = this.httpclient.delete(`${baseUrl}/${id}`)
    return result
    
  }
}
