import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

import { DomSanitizer } from "@angular/platform-browser";

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.scss']
})
export class DeleteEventComponent implements OnInit {

  formC:FormGroup

  fileSources = []

  categories = []

  caracteristiques = []

  listCategoriesShema=[]
  listCategories=[]
  listDescriptionsDessous=[]
  listDescriptionsDessus=[]
  
  longDesc

  constructor( private _Activatedroute:ActivatedRoute, private domSanitizer:DomSanitizer, private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, public userService:UserService, public productService:ProduitsFormationService) { 
    
    this.formC = new FormGroup({
      nom:new FormControl('',[Validators.required, Validators.min(1)]),
      telephone:new FormControl('',[Validators.required, Validators.min(1)]),
      adresse:new FormControl('',[Validators.required, Validators.min(1)]),
      specialites:new FormControl('',[Validators.required, Validators.min(1)]),
      description:new FormControl('',[Validators.required, Validators.min(1)]),
      email:new FormControl('',[Validators.required, Validators.min(1)]),
      file: new FormControl('', [Validators.required]),
    })

  }

  photoURL(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  isOnLine=1
  setOnline(pos){
    this.isOnLine = pos
  }

  
 

  get f(){
    return this.formC.controls;
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.inisialiserProduit(params.get('id')); 
    });
  }
  
  idCentre
  inisialiserProduit(idProduit){
    this.idCentre = idProduit
    this.isLoading = true
    this.http.get(this.userService.baseURL+"/centreFormation/getById/"+idProduit).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          this.centreFormation = response.resultat
          this.initialiserCentreFormation(this.centreFormation)
        }else{
         // alert(this.notificationService.alertNotConnexion)
        }
      }, err => {
        //alert(this.notificationService.alertNotConnexion)
        this.isLoading = false; 
      }
    );

  }

  initialiserCentreFormation(centreFormation){
    this.formC = new FormGroup({
      nom:new FormControl(centreFormation.nom,[Validators.required, Validators.min(1)]),
      telephone:new FormControl(centreFormation.telephone,[Validators.required, Validators.min(1)]),
      adresse:new FormControl(centreFormation.adresse,[Validators.required, Validators.min(1)]),
      specialites:new FormControl(centreFormation.specialites,[Validators.required, Validators.min(1)]),
      description:new FormControl(centreFormation.description,[Validators.required, Validators.min(1)]),
      email:new FormControl(centreFormation.email,[Validators.required, Validators.min(1)]),
      file: new FormControl("", [Validators.required]),
    })

 
  }

  centreFormation
  

  isLoading = false

  isDelete = false
  delete(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true
    
    this.http.get(this.userService.baseURL+"/centreFormation/deleteCentreFormation/"+this.idCentre,
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