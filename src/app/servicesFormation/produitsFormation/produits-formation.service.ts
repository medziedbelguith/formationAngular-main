import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsFormationService {
  
  newFormations :any
 

  varFormations=[]
  formations=new BehaviorSubject(this.varFormations)
  formationsChange=this.formations.asObservable()  
 
  produitPromoString = " Promotions"
  produitSpecialsString = "Speciales"
  produitNouveauString = "Nouvelles"
  produitMeilleurVenteString = "Top categorie"

  constructor(private http: HttpClient) {
     
     this.newFormations = this.http.get("./assets/constantes/formations.json").subscribe(res => {
       this.newFormations = res
       if(this.newFormations){
         this.varFormations = this.newFormations
         this.formations.next(this.newFormations)
       }
     })
 
  }
 
}
 