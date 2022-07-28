import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../servicesFormation/user/user.service'

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  role=""
  constructor(public userService:UserService) { 
    this.userService.role.subscribe(res =>{
      this.role = res
    })
  }

  ngOnInit(): void {
  }

}
