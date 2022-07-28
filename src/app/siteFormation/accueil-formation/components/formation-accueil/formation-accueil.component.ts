import { Component, OnInit } from '@angular/core';
import { ProduitsFormationService } from '../../../../servicesFormation/produitsFormation/produits-formation.service'

@Component({
  selector: 'app-formation-accueil',
  templateUrl: './formation-accueil.component.html',
  styleUrls: ['./formation-accueil.component.scss']
})
export class FormationAccueilComponent implements OnInit {

  categories1=[]
  categories2=[]
  categories3=[]
  categories4=[]

  constructor(public produitsFormationService:ProduitsFormationService) { 
    
    this.categories1=[{categories: this.produitsFormationService.produitMeilleurVenteString}]
    this.categories2=[{categories: this.produitsFormationService.produitNouveauString}]
    this.categories3=[{categories: this.produitsFormationService.produitSpecialsString}]
    this.categories4=[{categories: this.produitsFormationService.produitPromoString}]

  }

  formations = []

  ngOnInit(): void {
  }


}
