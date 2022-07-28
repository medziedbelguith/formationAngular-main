import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {CategoriesFormationService} from '../../servicesFormation/categoriesFormation/categories-formation.service'

@Component({
  selector: 'app-formations-page',
  templateUrl: './formations-page.component.html',
  styleUrls: ['./formations-page.component.scss']
})
export class FormationsPageComponent implements OnInit {

  constructor(private categoriesFormationService:CategoriesFormationService) {
    
  }

  categories = []
  categorie2

  categoriesEmpty = []

  ngOnInit(): void {
     this.categoriesFormationService.categories.subscribe(res => {
       this.categories = res
       this.categorie2 = this.categories[0]
       this.categories = this.categories.filter(x => x.id != this.categorie2.id) 
     })
  }

}
