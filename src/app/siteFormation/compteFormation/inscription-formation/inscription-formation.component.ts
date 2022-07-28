import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../servicesFormation/user/user.service';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../servicesFormation/notification/notification.service';


@Component({
  selector: 'app-inscription-formation',
  templateUrl: './inscription-formation.component.html',
  styleUrls: ['./inscription-formation.component.scss']
})
export class InscriptionFormationComponent implements OnInit {

  formC:FormGroup
  isLoading = false;
  erreurString = []
  isErreurs = false;

  constructor(private notificationService:NotificationService, private fb:FormBuilder, private userService:UserService, private http: HttpClient){
    
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
  
  ngOnInit(): void { }

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
          this.notificationService.showSuccess(this.notificationService.successCompteActive, this.notificationService.TypeFelicitation)
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
