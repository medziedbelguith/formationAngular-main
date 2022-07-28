import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private notificationService:NotificationService) { 
    this.inisialiseRoleAndEmail()
  }
  
  //baseURL = "https://formations.herokuapp.com"
  baseURL = "http://localhost:3000"
  baseURLAngular = "http://localhost:4200"
  
  tokenString = "tokenString"
  roleString = "roleString"
  emailString = "emailString"
  idString = "idString"
  
  roleAdmin = "admin"
  roleEtudiant = "Etudiant"
  roleFormateur = "Formateur"
  
  varRole=""
  role=new BehaviorSubject(this.varRole)
  roleChange=this.role.asObservable()  
  
  varEmail=this.notificationService.compteString
  email=new BehaviorSubject(this.varEmail)
  emailChange=this.email.asObservable()  

  id=""

  varOpenModelInscrireLogin = 0
  openModelInscrireLogin=new BehaviorSubject(this.varOpenModelInscrireLogin)
  openModelInscrireLoginChange=this.openModelInscrireLogin.asObservable() 
  
  varSearch=""
  search=new BehaviorSubject(this.varSearch)
  searchChange=this.search.asObservable()  

  setSearch(mot){
    this.varSearch = mot
    this.search.next(mot)
  }

  setOpenModelInscrireLogin(data){
    this.openModelInscrireLogin.next(data)
  }

  setTokenAndRole(data){
    localStorage.setItem(this.tokenString, data.token)
    localStorage.setItem(this.roleString, data.role)
    localStorage.setItem(this.emailString, data.email)
    localStorage.setItem(this.idString, data.id)

    this.id = data.id

    this.varRole = data.role;
    this.role.next(this.varRole)

    this.varEmail = data.email;
    this.email.next(this.varEmail)
  }

  deconnexion(){
    localStorage.setItem(this.tokenString, "")
    localStorage.setItem(this.roleString, "")

    this.varRole = "";
    this.role.next(this.varRole)
  }

  inisialiseRoleAndEmail(){
    var newRole = localStorage.getItem(this.roleString)
    var newEmail = localStorage.getItem(this.emailString)
    this.id =  localStorage.getItem(this.idString)
    
    if(newRole != this.roleEtudiant && newRole != this.roleAdmin && newRole != this.roleFormateur){
      this.role.next("")
      this.varRole = ""
    }else{
      this.varRole = newRole
      this.role.next(newRole)

      this.varEmail = newEmail
      this.email.next(newEmail)
    }
  }

  getEmail(){
    return this.varEmail
  }

}
