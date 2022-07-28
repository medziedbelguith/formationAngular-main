import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

import { DomSanitizer } from "@angular/platform-browser";

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  fileSources = []

  categories = []

  caracteristiques = []

  listCategoriesShema=[]
  listCategories=[]
  listDescriptionsDessous=[]
  listDescriptionsDessus=[]
  
  longDesc

  constructor( private _Activatedroute:ActivatedRoute, private domSanitizer:DomSanitizer, private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, public userService:UserService, public productService:ProduitsFormationService) { 
    
   

  }

  photoURL(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  isOnLine=1
  setOnline(pos){
    this.isOnLine = pos
  }

  
 

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.inisialiserProduit(params.get('id')); 
    });
  }
  
  idCentre
  inisialiserProduit(idProduit){
    this.idCentre = idProduit
  }

  
  centreFormation
  

  isLoading = false

  isDelete = false
  delete(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true
    
    this.http.get(this.userService.baseURL+"/user/deleteUser/"+this.idCentre,
    {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        this.notificationService.showSuccess(this.notificationService.successSaveUpdate, "Message")
         this.isLoading = false; 
         this.isDelete = true
      }, err => {
        alert(this.notificationService.alertNotConnexion)
        console.log(err)
        this.isLoading = false; 
      }
    );
    
  }

}