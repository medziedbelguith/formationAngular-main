import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../servicesFormation/user/user.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

declare var CKEDITOR: any;

@Component({
  selector: 'app-formation-details-formation',
  templateUrl: './formation-details-formation.component.html',
  styleUrls: ['./formation-details-formation.component.scss']
})
export class FormationDetailsFormationComponent implements OnInit {
  
  formation
  formations:any=[]
  myForm: FormGroup;
 
  chapitre
  posChapitre = 0
  
  email
  role

  autorized = false

  isShowVideo = true 
  
  constructor(private notificationService:NotificationService, public userService:UserService, private _Activatedroute:ActivatedRoute,  private router:Router, public formBuilder:FormBuilder, private http: HttpClient) {
    this.userService.email.subscribe(res =>
      this.email = res
    )

    this.userService.role.subscribe(res => {
      this.role = res
      
      if(res == this.userService.roleAdmin){
        this.autorized = true
      }

    })

    this.myForm = this.formBuilder.group({
      content: [null,Validators.required]
    });
  
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.inisialiserProduit(params.get('id')); 
    });
  }
  
  isLoading = false

  formateur

  inisialiserProduit(idProduit){
    
    this.isLoading = true
    this.http.get(this.userService.baseURL+"/produit/getById/"+idProduit).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          this.formation = response.resultat
          this.formateur = response.formateur

          if(this.formation.chapitres.length > 0){
            this.chapitre = this.formation.chapitres[0]
          }
          
          if(this.role != ""){
            this.verifiedEtudiant(idProduit)
          }
       
          this.initialiserEvaluation(this.formation.evaluations)
       
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

  setNextChapitre(pas){
    this.isShowVideo = false

    setTimeout(()=>{ 
      this.isShowVideo = true
    }, 500);


    this.posChapitre += pas

    if(this.formation.chapitres.length == 0){
      return
    }

    if(this.posChapitre > (this.formation.chapitres.length - 1)){
      this.posChapitre = 0
    }else if(this.posChapitre < 0){
      this.posChapitre = this.formation.chapitres.length - 1
    }

    this.chapitre = this.formation.chapitres[this.posChapitre]
  }

  condidature

  verifiedEtudiant(idProduit){

    this.isLoading = true
    this.http.get(this.userService.baseURL+"/etudiantFormation/getCondidature/"+idProduit, {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          this.condidature = response.resultat
   
          if(this.condidature.etat > 0){
            this.autorized = true
          }
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

  sommeEvaluation = 0

  initialiserEvaluation(evaluations){
      
    console.log(evaluations)
      for(let i = 0; i < evaluations.length; i++){
         this.sommeEvaluation += evaluations[i].nbrEtoiles 
         if(evaluations[i].emailUtilisateur == this.email && this.role != ""){
           this.evaluation = evaluations[i].nbrEtoiles
         }            
      }

      this.sommeEvaluation  = Math.round(this.sommeEvaluation / evaluations.length)

      this.evaluations = evaluations
  }

  evaluations = []

  contentChanged(){
    console.log(this.myForm.value.content);
  }


  idCommande = "222"
  isOpenCommande = false;

  closeCommande(){
    this.idCommande = "0";
    this.isOpenCommande = false;
  }

  openCommande(id){
    if(this.role == this.userService.roleFormateur){
      alert("Votre role n'est pas authorizer !!")
    }else if(this.role == ""){
      this.router.navigate(['/InscriptionFormation'])
    }

    this.idCommande = id;
    this.isOpenCommande = true;
  }

  idDetails=1

  changeDetails(id){
    this.idDetails = id
  }

  evaluation=0
  changeEvaluation(id){
    this.evaluation = id
    this.enregistrerEvaluation()
  }

  isLoading2 = false
  enregistrerEvaluation(){

    if(this.isLoading2){
      return
    }

    this.isLoading2 = true
    let evaluations = this.evaluations

    let ok = false
    for(let i = 0; i < evaluations.length; i++){
      if(evaluations[i].emailUtilisateur == this.email){
         evaluations[i].nbrEtoiles = this.evaluation
         ok = true
      }            
    } 

    if(!ok){
        evaluations.push({
          emailUtilisateur:this.email,
          nbrEtoiles:this.evaluation,
        })
    }

    this.evaluations = evaluations


    this.http.post(this.userService.baseURL+"/produit/evaluationFormation/"+this.formation.id, this.evaluations, {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        let response:any = res
        this.isLoading2 = false
        if(response.status){
          this.condidature = response.resultat
   
          let evaluations = this.evaluations

          let ok = false

          for(let i = 0; i < evaluations.length; i++){
            if(evaluations[i].emailUtilisateur == this.email && evaluations[i].nbrEtoiles == this.evaluation){
               ok = true
            }            
          } 

          if(!ok){
            this.enregistrerEvaluation()
          }

          if(this.condidature.etat > 0){
            this.autorized = true
          }
          console.log(response)
        }else{
         // alert(this.notificationService.alertNotConnexion)
        }
      }, err => {
        this.isLoading2 = false
        //alert(this.notificationService.alertNotConnexion)
      }
    );


  }

}
