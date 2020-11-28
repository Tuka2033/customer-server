import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicals=[
    {"Vehicle_Name":"Classic 350","Vehicle_Company":"Royal Enfield", "Vehicle_Model":"Classic", "Vehicle_Number":"16jj"},
    {"Vehicle_Name":"Pulser","Vehicle_Company":"Bajaj", "Vehicle_Model":"Pulser220", "Vehicle_Number":"15kk"},
    {"Vehicle_Name":"Apache","Vehicle_Company":"TVS", "Vehicle_Model":"Apache180", "Vehicle_Number":"20LH"},

   ]
constructor(private router: Router) { }

ngOnInit(): void {
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
