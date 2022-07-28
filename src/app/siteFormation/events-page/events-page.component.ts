import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  constructor(private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, public userService:UserService, public productService:ProduitsFormationService) { 
  }

  ngOnInit(): void {
     this.getEvents()
  }

  ngOnChanges(changes: SimpleChanges) {
 
  }


  isLoading = false
  
  events=[]

  getEvents(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    
    this.http.get(this.userService.baseURL+"/event/Events").subscribe(

      res => {
        this.isLoading = false
        let resultat:any
        console.log(resultat)
        resultat = res
        if(resultat.status){
          this.events = resultat.resultat
          console.log(this.events)       
        }

      }, err => {
        this.isLoading = false
       // alert("Désole, ilya un problème de connexion internet")
      }
    );
  }
 
}
