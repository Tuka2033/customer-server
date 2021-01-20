import { VehicleService } from './../../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  vehicle = null;
  
  v_company_name=""
  v_model=""
  v_regNo=""

constructor(private activatedRoute: ActivatedRoute,private router: Router, private vehicleService:VehicleService) { }

ngOnInit(): void {

  let id = this.activatedRoute.snapshot.queryParams['id']

  console.log(id+'id')
  
   if (id>0) {
    // edit product
    this.vehicleService
      .getVehicleDetails(id)
      .subscribe(response => {
         if (response) {
        console.log(response['v_company_name'])
        this.v_company_name=response['v_company_name']
        this.v_model=response['v_model']
        this.v_regNo=response['v_regNo']
        // this.vehicle=response
           const vehicles = response
          // if (vehicles) {
            this.vehicle = vehicles[0]
            // this.v_company_name = this.vehicle['v_company_name']
            // this.v_model = this.vehicle['v_model']
            // this.v_regNo = this.vehicle['v_regNo']
           this.vehicle=1
          // }
         }
      })
   }
}



   onUpdate() {

    if (this.vehicle) {
      // edit
      this.vehicleService
        .updateVehicle(this.vehicle['v_id'], this.v_company_name,this.v_model,this.v_regNo)
        .subscribe(response => {
         
          this.v_company_name=this.vehicle['v_company_name']
          this.v_model=this.vehicle['v_model']
          this.v_regNo=this.vehicle['v_regNo']

          console.log(response)

          // if (response['status'] == 'success') {
            this.router.navigate(['/vehicle'])
          // }
        })
    } else {
      // insert
      this.vehicleService
        .insertVehicle(this.v_company_name,this.v_model,this.v_regNo)
        .subscribe(response => {
          // if (response['status'] == 'success') {
            this.router.navigate(['/vehicle'])
          // }
        })
    }
  
  }
  
}
