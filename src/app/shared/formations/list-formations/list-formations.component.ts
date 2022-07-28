import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../../servicesFormation/notification/notification.service'

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.scss']
})
export class ListFormationsComponent implements OnInit {

  @Input() categories = []
  @Input() isRecherche = "0"

  constructor(private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, public userService:UserService, public productService:ProduitsFormationService) { 
  }

  ngOnInit(): void {
    if(this.isRecherche == "1"){
      this.userService.search.subscribe( res => {
        this.page = 1
        this.getFormationsBySearch(res)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  
      this.page = 1
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

    let request = {page:this.page, limitItems: 12, listCategories:this.categories}
    
    if(this.categories.length == 0){
      request = {page:this.page, limitItems: 10, listCategories:[]}
    }

    
    this.http.post(this.userService.baseURL+"/produit/listFormation", request).subscribe(

      res => {

        console.log(this.categories)

        this.isLoading = false
        let resultat:any
        console.log(request.listCategories)
        resultat = res
        if(resultat.status){
          console.log(resultat)
          this.page = resultat.resultat.page
          this.totalPage = resultat.resultat.pages
          this.formations = resultat.resultat.docs
        }

      }, err => {
        this.isLoading = false
      //  alert("Désole, ilya un problème de connexion internet")
      }
    );
  }
 

  getFormationsBySearch(search){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    let request = {page:this.page, limitItems: 10, listCategories:this.categories}
    
    this.http.post(this.userService.baseURL+"/produit/recherche/"+search, request).subscribe(

      res => {
        this.isLoading = false
        let resultat:any
        console.log(resultat)
        resultat = res
        if(resultat.status){
          console.log(resultat)
          this.page = resultat.resultat.page
          this.totalPage = resultat.resultat.pages
          this.formations = resultat.resultat.docs
        }


        
      }, err => {
        this.isLoading = false
       // alert("Désole, ilya un problème de connexion internet")
      }
    );
  }


  setPage(newPage: number) {
    //    this.scrollTop()
        this.page = newPage
        this.getFormations()
  }

}
