import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';
import { NavigationStart, NavigationError, NavigationEnd } from '@angular/router'; 

import { UserService } from './servicesFormation/user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  routePath

  constructor(private router: Router, private userService:UserService) {
   
    this.routePath = localStorage.getItem("routePath");
    
    this.router.events.subscribe((event: Event) => {

  
      if (event instanceof NavigationEnd) {
          // if(event.url != this.routePath && event.url != "/accueil"){
          if(event.url != this.routePath){
            localStorage.setItem("routePath", event.url);
            //location.reload();

             console.log("routePath")
            
             window.scroll(0,0);
              //document.body.scrollTop = 0;

           
          }

        }  

    });

    this.userService.openModelInscrireLogin.subscribe(res => {
           if(res == 1){
             this.openLogin()           
           }else if(res == 2){
             this.openRegister()           
           }      
    })

  }


  
  idCommande = "222"
  isOpenLogin = false;

  isOpenRegister = false;

  closeCommande(){
    this.idCommande = "0";
    this.isOpenLogin = false;
    this.isOpenRegister = false;
  }

  openLogin(){
    this.isOpenLogin = true;
    this.isOpenRegister = false;
  }


  openRegister(){
    this.isOpenLogin = false;
    this.isOpenRegister = true;
  }

}
