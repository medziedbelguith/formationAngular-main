import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicesFormation/user/user.service';
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'

@Component({
  selector: 'app-accueil-formation',
  templateUrl: './accueil-formation.component.html',
  styleUrls: ['./accueil-formation.component.scss']
})
export class AccueilFormationComponent implements OnInit {

  categories1=[]
  categories2=[]
  categories3=[]
  categories4=[]

  constructor(public produitsFormationService:ProduitsFormationService, private userService:UserService) { 
    
    this.categories1=[{categorie: this.produitsFormationService.produitMeilleurVenteString}]
    this.categories2=[{categorie: this.produitsFormationService.produitNouveauString}]
    this.categories3=[{categorie: this.produitsFormationService.produitSpecialsString}]
    this.categories4=[{categorie: this.produitsFormationService.produitPromoString}]

  }

  ngOnInit(): void {

    if(this.userService.varRole == ""){
      console.log("this.userService.varRole")
      
      this.openCommande("3333")
    }
    
    
  }


  idCommande = "222"
  isOpenCommande = false;

  closeCommande(){
    this.idCommande = "0";
    this.isOpenCommande = false;
  }

  openCommande(id){
    this.idCommande = id;
    this.isOpenCommande = true;
  }

}
