import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

offers=[
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"},
  {"offer_name":"Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","shop_name":"Grace Motors","validity":"3/12/2020"}
]

  constructor() 
  {

  }


  ngOnInit(): void {
  }

}
