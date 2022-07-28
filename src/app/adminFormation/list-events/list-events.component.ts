import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
  constructor(private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, private userService:UserService, public productService:ProduitsFormationService) { 
  }

  ngOnInit(): void {
    this.getFormations()
  }

  isLoading = false
  page=1
  totalPage=1

  formations=[]

  getFormations(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    let request = {page:this.page, limitItems: 10, listCategories:[]}
    
    this.http.get(this.userService.baseURL+"/event/Events").subscribe(

      res => {
        this.isLoading = false
        let resultat:any
        console.log(resultat)
        resultat = res
        if(resultat.status){
          /*console.log(resultat)
          this.page = resultat.resultat.page
          this.totalPage = resultat.resultat.pages*/
          this.formations = resultat.resultat
        }

      }, err => {
        this.isLoading = false
        //alert("Désole, ilya un problème de connexion internet")
      }
    );
  }
 

  setPage(newPage: number) {
    //    this.scrollTop()
        this.page = newPage
        this.getFormations()
  }

}
