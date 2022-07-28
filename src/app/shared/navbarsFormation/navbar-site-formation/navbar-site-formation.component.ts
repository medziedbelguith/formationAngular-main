import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../servicesFormation/user/user.service';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../servicesFormation/notification/notification.service';

import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-navbar-site-formation',
  templateUrl: './navbar-site-formation.component.html',
  styleUrls: ['./navbar-site-formation.component.scss']
})
export class NavbarSiteFormationComponent implements OnInit {

  role
  email

  constructor(private router:Router, private notificationService:NotificationService, private fb:FormBuilder, public userService:UserService, private http: HttpClient){
    this.userService.email.subscribe(res =>
      this.email = res
    )

    this.userService.role.subscribe(res => {
      this.role = res
    })

  }

  ngOnInit(): void {
    this.getEvents()

  }

  deconnexion(){
    this.userService.deconnexion()
    this.router.navigate(['/'])
  }

  goLogin(){
    this.userService.setOpenModelInscrireLogin(1)
  }

  goRegister(){
    this.userService.setOpenModelInscrireLogin(2)
  }

  events=[]

  getEvents(){
    
    this.http.get(this.userService.baseURL+"/event/Events").subscribe(

      res => {
        let resultat:any
        resultat = res
        if(resultat.status){
          console.log(resultat)
          this.events = resultat.resultat
        }

      }, err => {
       // alert("Désole, ilya un problème de connexion internet")
      }
    
    );

  }

  changeRechercher(){
    let text = (document.getElementById("searchNavbar")  as HTMLInputElement).value
    if(text == ""){
      return
    }
    this.userService.setSearch(text)
    this.router.navigate(['/RecherchePage'])
  }

}
