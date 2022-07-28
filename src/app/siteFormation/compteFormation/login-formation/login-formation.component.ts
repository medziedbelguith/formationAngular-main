import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../servicesFormation/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, Event } from '@angular/router';
import { NotificationService } from '../../../servicesFormation/notification/notification.service';

@Component({
  selector: 'app-login-formation',
  templateUrl: './login-formation.component.html',
  styleUrls: ['./login-formation.component.scss']
})
export class LoginFormationComponent implements OnInit {

  formC:FormGroup
  isLoading = false;
  erreurString = []
  isErreurs = false;

  message 
  

  constructor(private notificationService:NotificationService, private fb:FormBuilder, private userService:UserService, private http: HttpClient, private router:Router) { 
    this.formC = this.fb.group({
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password:['',[Validators.required, Validators.min(6)]],
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
