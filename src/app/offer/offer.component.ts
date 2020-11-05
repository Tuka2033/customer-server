import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

offers=[
  {"id":1,"discount":20,"shop_name":"Grace Motors","coupon":"DIWALI20"},
  {"id":2,"discount":40,"shop_name":"Bike Garage","coupon":"SUMMER12"},
  {"id":3,"discount":10,"shop_name":"Dr Bike","coupon":"WINTER10"},
  {"id":4,"discount":30,"shop_name":"Bike Master","coupon":"OFF20"},
  {"id":5,"discount":25,"shop_name":"Bike Guru ","coupon":"SEASONEND30"},
  {"id":6,"discount":5,"shop_name":"Clutch Motors","coupon":"MANSOON35"},


]

  constructor(private router:Router) 
  {

  }


  ngOnInit(): void {
  }

  viewOffer(offer){
   this.router.navigate(['/shop'],{queryParams:{id:offer['Vehicle_Number']}})

  }

}
