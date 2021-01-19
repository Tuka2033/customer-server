import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'app/vehicle.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  


  vehicals:any=[
    // {"Vehicle_Name":"Classic 350","Vehicle_Company":"Royal Enfield", "Vehicle_Model":"Classic", "Vehicle_Number":"16jj"},
    // {"Vehicle_Name":"Pulser","Vehicle_Company":"Bajaj", "Vehicle_Model":"Pulser220", "Vehicle_Number":"15kk"},
    // {"Vehicle_Name":"Apache","Vehicle_Company":"TVS", "Vehicle_Model":"Apache180", "Vehicle_Number":"20LH"},

   ]
constructor(private router: Router, private vehicleService:VehicleService ) { }

ngOnInit(): void {
  this.loadVehicles()
  console.log(this.vehicals)
}



loadVehicles(){

 this.vehicleService.getVehicles().subscribe((res)=>{
      
         this.vehicals=res
         console.warn(res)
        //  console.log(res)

      
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
