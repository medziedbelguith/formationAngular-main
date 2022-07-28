import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../../servicesFormation/user/user.service'
import { NotificationService } from '../../../servicesFormation/notification/notification.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-popups',
  templateUrl: './login-popups.component.html',
  styleUrls: ['./login-popups.component.scss']
})
export class LoginPopupsComponent implements OnInit {
  @Input() isOpenCommande
  @Input() idCommande
  classCss = "modalCommande"
  @Output() closeCommandeEvent = new EventEmitter<string>();
  
  isAdmin
  isLoading = false

  constructor(private fb:FormBuilder,private notificationService:NotificationService, private userService:UserService, private router:Router,  private http: HttpClient) { 
    this.userService.role.subscribe(res =>{
      if(res == ""){
        this.isAdmin = false; 
      }else if(res == this.userService.roleAdmin){
        this.isAdmin = true; 
      }else{
        this.isAdmin = false; 
      }
    })

    this.formC = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required, Validators.min(6)]],
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
    
    console.log(this.idCommande)

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


  formC:FormGroup
  erreurString = []
  isErreurs = false;

  message 
  


  chargerErreurs(){
    this.erreurString = []
    this.isErreurs = false
  
    if(this.formC.controls.email.status != "VALID"){
      this.erreurString.push(this.notificationService.errorEmail)  
      this.isErreurs = true
    }
    
    if(this.formC.value.password.length < 6){
      this.erreurString.push(this.notificationService.errorPassword)
      this.isErreurs = true
    }

    return this.isErreurs
  }


  login(){
   
    if (this.chargerErreurs()) {
      return
    }
  
    if(this.isLoading){
      return 
    }

    this.isLoading = true;
    
    this.http.post(this.userService.baseURL+"/user/login",this.formC.value).subscribe(
      res => {
        this.isLoading = false
        let response: any = res
        if(response.status){
          this.userService.setTokenAndRole(response)
          this.message= this.notificationService.messageLogin + response.email
          //this.router.navigate(['/'])
          this.notificationService.showSuccess(this.message, this.notificationService.TypeMessage)
          this.formC.reset() 
          this.closeCommande()   
        }else{
          this.notificationService.showMessageErrorBackEnd(response.message)  
          this.closeCommande()  
        }
      }, err => {
        this.isLoading = false
        alert(this.notificationService.alertNotConnexion)
      }
    );
  }



}
