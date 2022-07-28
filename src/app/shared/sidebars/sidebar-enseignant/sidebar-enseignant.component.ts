import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../servicesFormation/user/user.service'

@Component({
  selector: 'app-sidebar-enseignant',
  templateUrl: './sidebar-enseignant.component.html',
  styleUrls: ['./sidebar-enseignant.component.scss']
})
export class SidebarEnseignantComponent implements OnInit {

  role=""
  constructor(public userService:UserService) { 
    this.userService.role.subscribe(res =>{
      this.role = res
    })
  }

  ngOnInit(): void {
  }

  blurFunction(){
    console.log("blur")
  }
}
