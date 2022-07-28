import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../servicesFormation/user/user.service';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../servicesFormation/notification/notification.service';

import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-sidebar-etudiant',
  templateUrl: './sidebar-etudiant.component.html',
  styleUrls: ['./sidebar-etudiant.component.scss']
})
export class SidebarEtudiantComponent implements OnInit {
  role
  email

  constructor(private router:Router, private notificationService:NotificationService, private fb:FormBuilder, public userService:UserService, private http: HttpClient){
    this.userService.email.subscribe(res =>
      this.email = res
    )

    this.userService.role.subscribe(res => {
      this.role = res
    })

  }

  ngOnInit(): void {
    
  }

  deconnexion(){
    this.userService.deconnexion()
    this.router.navigate(['/'])
  }

}
