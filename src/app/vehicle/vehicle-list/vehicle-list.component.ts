import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'app/vehicle.service';
import { data } from 'jquery';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles :any =[]
  // vehicals=[
  //   // {"Vehicle_Name":"Classic 350","Vehicle_Company":"Royal Enfield", "Vehicle_Model":"Classic", "Vehicle_Number":"16jj"},
  //   // {"Vehicle_Name":"Pulser","Vehicle_Company":"Bajaj", "Vehicle_Model":"Pulser220", "Vehicle_Number":"15kk"},
  //   // {"Vehicle_Name":"Apache","Vehicle_Company":"TVS", "Vehicle_Model":"Apache180", "Vehicle_Number":"20LH"},

  //  ]
  constructor(private router: Router,private service:VehicleService) {
    
    //  const result=service.getVehicle()
    // result.subscribe((response) => { 
    //   if (response['Status'] = `success`)
    //   {
    //        response[`data`]
    //    }

      
    // })
    
    

 }

  ngOnInit(): void {
    this.service.getAllVehicle().subscribe((result) => { 
        this.vehicles=result
      console.log(result)
    })
  
}
  getVehicleById(id) {
    this.service.getVehicleById(id).subscribe((result) => { 
      this.vehicles=result
    console.log(result)
  })
 }

 onUpdate(id,data) {
  this.service.updateVehicleById(id,data).subscribe((result) => { 
    this.vehicles=result
  console.warn(result)
})
}
onEdit(vehicle)
{
   this.router.navigate(['/vehicle-add'],{queryParams:{id:vehicle['Vehicle_Number']}})

}

addvehicle()
{

this.router.navigate(['/vehicle-add'])
}

}
