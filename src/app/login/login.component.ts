import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private router: Router,
    private loginService:LoginService) {}

  ngOnInit(): void {
  }

  onLogin() {
    //alert(this.email.length);
      if (this.email.length == 0) {
        alert('enter email');
      } else if (this.password.length ==0) {
        alert('enter password');
      } else {
  
        let observableResult = this.loginService.login(this.email,this.password);
        observableResult.subscribe((result) => {
          // console.log(result);
          if(result==null) {
            alert("invalid login");
            this.router.navigate(['']);
            console.log(observableResult)
          }
      else
        {
            sessionStorage['login_status'] = '1';
            localStorage.setItem('firstname', result['u_first_name']);
             localStorage.setItem('vehicle', JSON.stringify(result));
            localStorage.setItem('id', result['u_id']);
            localStorage.setItem('flag','true');
            console.log(localStorage.getItem('id'))

          const vehicle = JSON.parse(localStorage.getItem('vehicle'));

          console.log(vehicle.u_vehicles)

          
          
           
           
         

           

            // var cart = [];
            // if(localStorage.getItem('cart') == null) {
            //   localStorage.setItem('cart', JSON.stringify(cart));
            //   console.log('added empty cart into local storage');
            // }
           // this.emtService.navBarSwitch(true);
           console.log(result)
            this.router.navigateByUrl("dashboard");
        }
      });
        
      }
    }
  
  
    onSignup() {
      this.router.navigate(['/register']);
    }
    onCancel(){
      this.router.navigate(['']);
    }
}
