import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {FormateursFormationService} from '../../../servicesFormation/formateursFormation/formateurs-formation.service'
import { Router, Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../servicesFormation/user/user.service'

@Component({
  selector: 'app-list-formateurs',
  templateUrl: './list-formateurs.component.html',
  styleUrls: ['./list-formateurs.component.scss']
})
export class ListFormateursComponent implements OnInit {

  @Input() categorie=""
  
  constructor(private formateursFormationService:FormateursFormationService, private router:Router, private http: HttpClient, public userService:UserService) {
    
  }

  formateurs = []

  ngOnInit(): void {
   /*  this.formateursFormationService.formateurs.subscribe(res => {
       this.formateurs = res
     })*/
  }

  selectCategorie(route){
    this.router.navigate([route])
  }

  ngOnChanges(changes: SimpleChanges) {

    if(this.categorie != ""){
        this.getFormateurs()
    }
   
  }

  isLoading = false
  page=1
  totalPage=1

  
  getFormateurs(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    let request = {page:this.page, limitItems: 9, listCategories:[{categories:this.categorie}]}
    
    this.http.post(this.userService.baseURL+"/user/formateurs", request).subscribe(

      res => {
        this.isLoading = false
        let resultat:any
        console.log(resultat)
        resultat = res
        if(resultat.status){
          console.log(resultat)
          this.page = resultat.resultat.page
          this.totalPage = resultat.resultat.pages
          this.formateurs = resultat.resultat.docs
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
        this.getFormateurs()
  }

}