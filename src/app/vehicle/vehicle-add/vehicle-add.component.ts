import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  service = null;
  
  Vehicle_Name=''
  Vehicle_Company=''
  Vehicle_Model=''


constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
}

onUpdate() {

}
id = this.activatedRoute.snapshot.queryParams['id']
   if(id){
     console.log(id)
   }

}
