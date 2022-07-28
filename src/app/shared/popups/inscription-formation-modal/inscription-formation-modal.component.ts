import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../../servicesFormation/user/user.service'
import { NotificationService } from '../../../servicesFormation/notification/notification.service'


@Component({
  selector: 'app-inscription-formation-modal',
  templateUrl: './inscription-formation-modal.component.html',
  styleUrls: ['./inscription-formation-modal.component.scss']
})
export class InscriptionFormationModalComponent implements OnInit {

  @Input() isEvent="0"
  @Input() isOpenCommande
  @Input() idCommande
  classCss = "modalCommande"
  @Output() closeCommandeEvent = new EventEmitter<string>();
  
  isAdmin
  isLoading = false

  constructor(private notificationService:NotificationService, private userService:UserService, private router:Router,  private http: HttpClient) { 
    this.userService.role.subscribe(res =>{
      if(res == ""){
        this.isAdmin = false; 
      }else if(res == this.userService.roleAdmin){
        this.isAdmin = true; 
      }else{
        this.isAdmin = false; 
      }
    })
  }

  closeCommande() {
    this.closeCommandeEvent.emit();
  }

  
  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.isOpenCommande){
      this.classCss = "modalCommande modalCommande-open"
    }else{
      this.classCss = "modalCommande"
    }
  }

  etat = 0

  envoyerInscription(){
    
     if(this.isEvent == "0"){
       this.avecFormation()
     }else{
       this.avecEvenement()
     }
      
  }

  avecEvenement(){

    if(this.isLoading){
      return
    }

    this.isLoading = true

    this.http.post(this.userService.baseURL+"/etudiantEvent/newInscription/"+this.idCommande, {}, {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        this.isLoading = false
        let response: any = res

        if(response.status){
         
         // this.notificationService.showSuccess("Votre inscription est enregistreé et nous vous contactons dans les plus brefs délais .", this.notificationService.TypeMessage)
          //this.closeCommande()

          this.etat = 1

        }else{
          this.closeCommande()     
        }
      }, err => {
        this.isLoading = false
        this.closeCommande()   
      }
    );
 
    
  }

  avecFormation(){

    if(this.isLoading){
      return
    }

    this.isLoading = true

    this.http.post(this.userService.baseURL+"/etudiantFormation/newInscription/"+this.idCommande, {}, {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        this.isLoading = false
        let response: any = res

        if(response.status){
         
         // this.notificationService.showSuccess("Votre inscription est enregistreé et nous vous contactons dans les plus brefs délais .", this.notificationService.TypeMessage)
          //this.closeCommande()

          this.etat = 1

        }else{
          this.closeCommande()     
        }
      }, err => {
        this.isLoading = false
        this.closeCommande()   
      }
    );
 

  }


}