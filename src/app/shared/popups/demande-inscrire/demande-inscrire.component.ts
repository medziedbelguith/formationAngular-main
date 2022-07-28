import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../../servicesFormation/user/user.service'
import { NotificationService } from '../../../servicesFormation/notification/notification.service'

@Component({
  selector: 'app-demande-inscrire',
  templateUrl: './demande-inscrire.component.html',
  styleUrls: ['./demande-inscrire.component.scss']
})
export class DemandeInscrireComponent implements OnInit {

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


  goLogin(){
    this.userService.setOpenModelInscrireLogin(1)
    this.closeCommande()
  }

  goRegister(){
    this.userService.setOpenModelInscrireLogin(2)
    this.closeCommande()
  }
  

}