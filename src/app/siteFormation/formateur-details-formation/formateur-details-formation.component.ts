import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../servicesFormation/user/user.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'


@Component({
  selector: 'app-formateur-details-formation',
  templateUrl: './formateur-details-formation.component.html',
  styleUrls: ['./formateur-details-formation.component.scss']
})
export class FormateurDetailsFormationComponent implements OnInit {
  formation
  formations:any=[]
  myForm: FormGroup;
 
  ckeditorConten
  
  
  constructor(private notificationService:NotificationService, public userService:UserService, private _Activatedroute:ActivatedRoute,  private router:Router, public formBuilder:FormBuilder, private http: HttpClient) {
     
   
    this.myForm = this.formBuilder.group({
      content: [null,Validators.required]
    });
  
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.inisialiserProduit(params.get('id')); 
    });
  }
  
  isLoading = false

  formateur

  inisialiserProduit(idProduit){
    
    this.isLoading = true
    this.http.get(this.userService.baseURL+"/produit/getById2/"+idProduit).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          this.formations = response.resultat
          this.formateur = response.formateur
          console.log(response)
        }else{
         // alert(this.notificationService.alertNotConnexion)
        }
      }, err => {
        //alert(this.notificationService.alertNotConnexion)
        this.isLoading = false; 
      }
    );

  }



  contentChanged(){
    console.log(this.myForm.value.content);
  }

}