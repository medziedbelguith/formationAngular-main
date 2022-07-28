import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../../servicesFormation/user/user.service'
import { NotificationService } from '../../../servicesFormation/notification/notification.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscrire-popus',
  templateUrl: './inscrire-popus.component.html',
  styleUrls: ['./inscrire-popus.component.scss']
})
export class InscrirePopusComponent implements OnInit {
  @Input() isOpenCommande
  @Input() idCommande
  classCss = "modalCommande"
  @Output() closeCommandeEvent = new EventEmitter<string>();
  
  isAdmin
  isLoading = false

  constructor(private fb:FormBuilder, private notificationService:NotificationService, private userService:UserService, private router:Router,  private http: HttpClient) { 
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
      nom:[''],
      prenom:[''],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      telephone:['',[Validators.required, Validators.min(8)]],
      adresse:[''],
      ville:[''],
      pays:[''],
      company:[''],
      codePostal:[''],
      password:['',[Validators.required, Validators.min(6)]],
      confirmePassword:['',[Validators.required, Validators.min(6)]],
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

  formC:FormGroup
  erreurString = []
  isErreurs = false;


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

    if(this.formC.value.confirmePassword.length < 6){
      this.erreurString.push(this.notificationService.errorPassowrdConfirm)
      this.isErreurs = true
    }

    if(this.formC.controls.telephone.status != "VALID"){
      this.erreurString.push(this.notificationService.errorTelephone)
      this.isErreurs = true
    }

    return this.isErreurs

  }

  typeCompte="Etudiant"

  setMode(pos){
    if(pos == 1){
      this.typeCompte=this.userService.roleEtudiant
    }else{
      this.typeCompte=this.userService.roleFormateur
    }
  }

  register(){
  
    if(this.isLoading){
        return 
    }

    if (this.chargerErreurs()) {
      return
    }

    if (this.formC.value.confirmePassword != this.formC.value.password){
       this.erreurString.push(this.notificationService.errorConfirmPassword)
       this.isErreurs = true
       return
    }
   
    let request = this.formC.value
    request.role = this.typeCompte
    this.isLoading = true;
    
    this.http.post(this.userService.baseURL+"/user/register",this.formC.value).subscribe(
      res => {
        this.isLoading = false
        let response: any = res
        if(response.status){
          this.isOpenCommande = false
          this.notificationService.showSuccess(this.notificationService.successCompteActive, this.notificationService.TypeFelicitation)
          this.userService.setOpenModelInscrireLogin(1)
          this.formC.reset()
        
        }else{
          this.notificationService.showMessageErrorBackEnd(response.message)
        }
        
      }, err => {
        this.isLoading = false
        alert(this.notificationService.alertNotConnexion)
      }
    );
  }


}
