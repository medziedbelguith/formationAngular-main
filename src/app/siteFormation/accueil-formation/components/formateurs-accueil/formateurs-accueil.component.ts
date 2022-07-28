import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {CategoriesFormationService} from '../../../../servicesFormation/categoriesFormation/categories-formation.service'

import {ProduitsFormationService} from '../../../../servicesFormation/produitsFormation/produits-formation.service'


@Component({
  selector: 'app-formateurs-accueil',
  templateUrl: './formateurs-accueil.component.html',
  styleUrls: ['./formateurs-accueil.component.scss']
})
export class FormateursAccueilComponent implements OnInit {

  constructor(private categoriesFormationService:CategoriesFormationService, public produitsFormation:ProduitsFormationService) {
    
  }

  categories = []
  categorie2

  ngOnInit(): void {
     this.categoriesFormationService.categories.subscribe(res => {
       this.categories = res
       this.categorie2 = this.categories[0]
       this.categories = this.categories.filter(x => x.id != this.categorie2.id) 
     })
  }







}
