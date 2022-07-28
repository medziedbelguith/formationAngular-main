import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-evaluation-enseignant',
  templateUrl: './list-evaluation-enseignant.component.html',
  styleUrls: ['./list-evaluation-enseignant.component.scss']
})
export class ListEvaluationEnseignantComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, private userService:UserService, public productService:ProduitsFormationService) { 
  }

  
 idFormation = ""
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.inisialiserProduit(params.get('id')); 
      this.idFormation = params.get('id')
    });
  }

  isLoading = false
  page=1
  totalPage=1

  evaluations=[]


  inisialiserProduit(idProduit){
    
    this.isLoading = true
    this.http.get(this.userService.baseURL+"/produit/getById/"+idProduit).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          console.log(response)
          this.evaluations = response.resultat.evaluations 
          console.log(response)
        }else{
         // alert(this.notificationService.alertNotConnexion)
        }
      }, err => {
        //alert(this.notificationService.alertNotConnexion)
        this.isLoading = false; 
      }
    );

  }


}
