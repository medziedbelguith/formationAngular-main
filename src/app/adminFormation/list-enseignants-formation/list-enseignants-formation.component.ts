import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

@Component({
  selector: 'app-list-enseignants-formation',
  templateUrl: './list-enseignants-formation.component.html',
  styleUrls: ['./list-enseignants-formation.component.scss']
})
export class ListEnseignantsFormationComponent implements OnInit {

 
  constructor(private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, private userService:UserService, public productService:ProduitsFormationService) { 
  }

  ngOnInit(): void {
    this.getFormateurs()
  }

  isLoading = false
  page=1
  totalPage=1

  formations=[]

  getFormateurs(){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    let request = {page:this.page, limitItems: 10, listCategories:[]}
    
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
          this.formations = resultat.resultat.docs
        }

      }, err => {
        this.isLoading = false
        //alert("Désole, ilya un problème de connexion internet")
      }
    );
  }

  activerFormateur(idFormateur, active){
    
    if(this.isLoading){
      return
    }

    this.isLoading = true

    this.http.post(this.userService.baseURL+"/user/ActiveFormateur/"+idFormateur+"/"+active, {}, 
    {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(

      res => {
        this.isLoading = false
        let resultat:any
        console.log(resultat)
        resultat = res
        if(resultat.status){
          if(active == 1){
            alert("Votre formateur est activé")
          }else{
            alert("Votre formateur est desactivé")
          }
        }

        for(let i = 0; i<this.formations.length;i++){
          if(this.formations[i].id == idFormateur){
            this.formations[i].isActive = active;
          }
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
