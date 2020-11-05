import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops = [
    { "name": "Dr Bike", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://stevesorensenmechanical.com.au/wp-content/uploads/Under-Car-1030x688.jpg"},
    { "name": "Clutch & Brake", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2FyB1anzeMWfJ8OoBiiTwUmCKQQTLq3Lfgw&usqp=CAU"},
    { "name": "Bike Clinic", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://topmotoric.com/wp-content/uploads/2019/07/services.png"},
    { "name": "Mechanic Auto", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://s7d2.scene7.com/is/image/farmers/auto-service-repair-2000x1050?wid=1260"},
    { "name": "Bike Guru", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYzHBCgiV9gYWjoFdf0OVdVAqODevYLcRaAQ&usqp=CAU"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
