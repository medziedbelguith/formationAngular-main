import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../servicesFormation/user/user.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'



@Component({
  selector: 'app-categorie-details-formation',
  templateUrl: './categorie-details-formation.component.html',
  styleUrls: ['./categorie-details-formation.component.scss']
})
export class CategorieDetailsFormationComponent implements OnInit {

  constructor(private notificationService:NotificationService, public userService:UserService,  private _Activatedroute:ActivatedRoute,  private router:Router, public formBuilder:FormBuilder, private http: HttpClient) {
  }

  categories = []

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.categories = [{categories: params.get('id')}] 
    });
  }

  

}
