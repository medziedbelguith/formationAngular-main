import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

import { DomSanitizer } from "@angular/platform-browser";

import { Router, Event } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

    

@Component({
  selector: 'app-profil-enseignant',
  templateUrl: './profil-enseignant.component.html',
  styleUrls: ['./profil-enseignant.component.scss']
})
export class ProfilEnseignantComponent implements OnInit {

 
  formC:FormGroup

  fileSources = []

  categories = []


  listCategoriesShema=[]
  listCategories=[]

  listFormations = []
  listStages = []
  listExperiences = []
  
  longDesc

  
  constructor( private _Activatedroute:ActivatedRoute,  private router:Router, private domSanitizer:DomSanitizer, private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, public userService:UserService, public productService:ProduitsFormationService) { 
    
    this.formC = new FormGroup({
      
      nom: new FormControl('',[Validators.required, Validators.min(1)]),
      prenom: new FormControl('',[Validators.required, Validators.min(1)]),
      telephone: new FormControl('',[Validators.required, Validators.min(1)]),
      specialites: new FormControl('',[Validators.required, Validators.min(1)]),
      adresse: new FormControl('',[Validators.required, Validators.min(1)]),
      ville: new FormControl('',[Validators.required, Validators.min(1)]),
      pays: new FormControl('',[Validators.required, Validators.min(1)]),
     
      email: new FormControl('',[Validators.required, Validators.min(1)]),
      password: new FormControl('',[Validators.required, Validators.min(1)]),
      
      newEmail: new FormControl('',[Validators.required, Validators.min(1)]),
      newPassword: new FormControl('',[Validators.required, Validators.min(1)]),    
      confirmePassword: new FormControl('',[Validators.required, Validators.min(1)]),
    
      codePostal: new FormControl('',[Validators.required, Validators.min(1)]),
      company: new FormControl('',[Validators.required, Validators.min(1)]),

      titleStage: new FormControl('',[Validators.required, Validators.min(1)]),
      valueStage: new FormControl('',[Validators.required, Validators.min(1)]),

      titleExperience: new FormControl('',[Validators.required, Validators.min(1)]),
      valueExperience: new FormControl('',[Validators.required, Validators.min(1)]),

      titleFormation: new FormControl('',[Validators.required, Validators.min(1)]),
      valueFormation: new FormControl('',[Validators.required, Validators.min(1)]),

      file: new FormControl('', [Validators.required]),
      
    })

    this.categoriesServices.categories.subscribe(res =>{
      if(res.length > 0){
        this.insialiseCategories(res)    
      }
    })


  }


  ngOnInit(): void {
    this.inisialiserFormateur()
  }
  
  isLoading = false

  formation
  formateur

  inisialiserFormateur(){
    
    this.isLoading = true
    this.http.get(this.userService.baseURL+"/user/details", 
    {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
        if(response.status){
          this.initialiserFormation22(response.resultat)
        }else{
         // alert(this.notificationService.alertNotConnexion)
        }
      }, err => {
        //alert(this.notificationService.alertNotConnexion)
        this.isLoading = false; 
      }
    );

  }

  initialiserFormation22(formateur){
    this.formC = new FormGroup({
      nom: new FormControl(formateur.nom,[Validators.required, Validators.min(1)]),
      prenom: new FormControl(formateur.nom,[Validators.required, Validators.min(1)]),
      telephone: new FormControl(formateur.telephone,[Validators.required, Validators.min(1)]),
      specialites: new FormControl(formateur.specialites,[Validators.required, Validators.min(1)]),
      adresse: new FormControl(formateur.adresse,[Validators.required, Validators.min(1)]),
      ville: new FormControl(formateur.ville,[Validators.required, Validators.min(1)]),
      pays: new FormControl(formateur.pays,[Validators.required, Validators.min(1)]),
      email: new FormControl(formateur.email,[Validators.required, Validators.min(1)]),
      password: new FormControl('',[Validators.required, Validators.min(1)]),
      codePostal: new FormControl(formateur.codePostal,[Validators.required, Validators.min(1)]),
      confirmePassword: new FormControl(formateur.confirmePassword,[Validators.required, Validators.min(1)]),
      company: new FormControl(formateur.company,[Validators.required, Validators.min(1)]),

      newEmail: new FormControl('',[Validators.required, Validators.min(1)]),
      newPassword: new FormControl('',[Validators.required, Validators.min(1)]),    
     
      titleStage: new FormControl('',[Validators.required, Validators.min(1)]),
      valueStage: new FormControl('',[Validators.required, Validators.min(1)]),

      titleExperience: new FormControl('',[Validators.required, Validators.min(1)]),
      valueExperience: new FormControl('',[Validators.required, Validators.min(1)]),

      titleFormation: new FormControl('',[Validators.required, Validators.min(1)]),
      valueFormation: new FormControl('',[Validators.required, Validators.min(1)]),

      file: new FormControl('', [Validators.required]),
    })

    for(let i = 0; i < formateur.categories.length;i++){
      this.listCategories.push({categorie:formateur.categories[i].categorie})    
    }

    for(let i = 0; i < formateur.formations.length;i++){
      this.listFormations.push({id:i,title:formateur.formations[i].title, value:formateur.formations[i].value})    
    }
    
    for(let i = 0; i < formateur.stages.length;i++){
      this.listStages.push({id:i,title:formateur.stages[i].title, value:formateur.stages[i].value})    
    }

    for(let i = 0; i < formateur.experiences.length;i++){
      this.listExperiences.push({id:i,title:formateur.experiences[i].title, value:formateur.experiences[i].value})    
    }
    
    this.imageSelected = formateur.image
    this.imageSelectedSource = null

  }

  photoURL(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  isOnLine=1
  setOnline(pos){
    this.isOnLine = pos
  }

  
  videoexemple = "https://www.youtube.com/embed/AsNeE_95QBA"

  insialiseCategories(encienCategories){
 
    let newCategories = []
    for(let i = 0; i < encienCategories.length; i++){
      newCategories.push({id:encienCategories[i].titre, className:"div-sous-categories", categories:[]})
    }
    
    this.categories = newCategories
  }

  get f(){
    return this.formC.controls;
  }

  
  selectCategories2(id){
  
    if(this.listCategories.filter(x => x.categorie == id).length > 0){
      this.listCategories = this.listCategories.filter(x => x.categorie != id)
    }else{
      this.listCategories.push({categorie : id})
    }

  }

  verifierCategories2(categorie){
    if(this.listCategories.filter(x => x.categorie == categorie).length > 0){
      return true
    }
    return false
  }
  
  
    
  
  // Gestion des DescriptionDessous --debut--

  FormationSelected = {id:-1, title:"", value:""}
  idFormation=0
  ajouteFormation(){
    if(this.formC.value.titleFormation != "" || this.formC.value.valueFormation != ""){
      this.idFormation++
      this.listFormations.push({title:this.formC.value.titleFormation,value:this.formC.value.valueFormation,id:this.idFormation})
      this.intialiseFormation()
    }
  }

  removeFormation(id){
    this.listFormations = this.listFormations.filter(x => x.id != id)
    this.intialiseFormation()
  }
  
  selectedFormation(id){
    let item = this.listFormations.filter(x => x.id == id)
    if(item.length > 0){
      this.FormationSelected = item[0]
      this.formC.patchValue({titleFormation: this.FormationSelected.title});
      this.formC.patchValue({valueFormation: this.FormationSelected.value});
    }
  }

  modifieFormation(){
    for(let i = 0; i < this.listFormations.length; i++){
      if(this.listFormations[i].id == this.FormationSelected.id){
        this.listFormations[i].title = this.formC.value.descriptionTitle
        this.listFormations[i].value = this.formC.value.descriptionValue
      }
    }
    this.intialiseFormation()
  }

  intialiseFormation(){
    this.formC.patchValue({titleFormation: ""});
    this.formC.patchValue({valueFormation: ""});
    this.FormationSelected = {id:-1, title:"", value:""}
  }


  // Gestion des DescriptionDessus --fin--

 
  
  // Gestion des DescriptionDessous --debut--

  ExperienceSelected = {id:-1, title:"", value:""}
  idExperience=0
  ajouteExperience(){
    if(this.formC.value.titleExperience != "" || this.formC.value.valueExperience != ""){
      this.idExperience++
      this.listExperiences.push({title:this.formC.value.titleExperience,value:this.formC.value.valueExperience,id:this.idExperience})
      this.intialiseExperience()
    }
  }

  removeExperience(id){
    this.listExperiences = this.listExperiences.filter(x => x.id != id)
    this.intialiseExperience()
  }
  
  selectedExperience(id){
    let item = this.listExperiences.filter(x => x.id == id)
    if(item.length > 0){
      this.ExperienceSelected = item[0]
      this.formC.patchValue({titleExperience: this.ExperienceSelected.title});
      this.formC.patchValue({valueExperience: this.ExperienceSelected.value});
    }
  }

  modifieExperience(){
    for(let i = 0; i < this.listExperiences.length; i++){
      if(this.listExperiences[i].id == this.ExperienceSelected.id){
        this.listExperiences[i].title = this.formC.value.titleExperience
        this.listExperiences[i].value = this.formC.value.valueExperience
      }
    }
    this.intialiseExperience()
  }

  intialiseExperience(){
    this.formC.patchValue({titleExperience: ""});
    this.formC.patchValue({valueExperience: ""});
    this.ExperienceSelected = {id:-1, title:"", value:""}
  }

  // Gestion des DescriptionDessus --fin--

  // Gestion des DescriptionDessous --debut--

  StageSelected = {id:-1, title:"", value:""}
  idStage=0
  ajouteStage(){
    if(this.formC.value.titleStage != "" || this.formC.value.valueStage != ""){
      this.idStage++
      this.listStages.push({title:this.formC.value.titleStage,value:this.formC.value.valueStage,id:this.idStage})
      this.intialiseStage()
    }
  }

  removeStage(id){
    this.listStages = this.listStages.filter(x => x.id != id)
    this.intialiseStage()
  }
  
  selectedStage(id){
    let item = this.listStages.filter(x => x.id == id)
    if(item.length > 0){
      this.StageSelected = item[0]
      this.formC.patchValue({titleStage: this.StageSelected.title});
      this.formC.patchValue({valueStage: this.StageSelected.value});
    }
  }

  modifieStage(){
    for(let i = 0; i < this.listStages.length; i++){
      if(this.listStages[i].id == this.StageSelected.id){
        this.listStages[i].title = this.formC.value.descriptionTitle
        this.listStages[i].value = this.formC.value.descriptionValue
      }
    }
    this.intialiseStage()
  }

  intialiseStage(){
    this.formC.patchValue({titleStage: ""});
    this.formC.patchValue({valueStage: ""});
    this.StageSelected = {id:-1, title:"", value:""}
  }


  // Gestion des DescriptionDessus --fin--


  // Gestion des photos --debut--
  multiImage
  imageSelected = null
  imageSelectedSource = ""

  selectedM(event) {
     this.multiImage = event.target.files;
     
     var files = event.target.files;
     if (files.length === 0)
     return;

     this.imageSelectedSource = files[0]
     
     var mimeType = files[0].type;
     if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
       return;
     }

     var reader = new FileReader();
     
     reader.readAsDataURL(files[0]); 
     reader.onload = (_event) => { 
       this.imageSelected = reader.result
     }
  }


  // Gestion des photos --fin--

 
  
  erreurString = []
  isErreurs = false;

  chargerErreurs(){
    this.erreurString = []
    this.isErreurs = false
  
    if(this.formC.controls.nom.status != "VALID") this.erreurString.push(this.notificationService.errorNomProduit)  
    if(this.listCategories.length == 0) this.erreurString.push(this.notificationService.errorCategoriesProduit)
    
    if(this.erreurString.length > 0){
      this.isErreurs = true 
      return true
    }
    return false
  }



  addProduit(){

    if(this.isLoading){
      return 
    }

    if (this.chargerErreurs()) {
      return
    }
  
    this.isLoading = true;

    var allImages = []

    if(this.imageSelectedSource){
      allImages.push({image:this.imageSelectedSource})
    }
    
    if(allImages.length == 0){
      this.envoyerRequest(this.imageSelected)
      return
    }

      const formData = new FormData();
      this.isLoading = true
      for (let img of allImages){
        formData.append('myFiles', img.image)
      }
      
      this.http.post(this.userService.baseURL+"/produit/upload", formData).subscribe(
        res => {
          
          var arrayImages: any = res
          
          if(arrayImages.length > 0){
            let i = 0;
            console.log(arrayImages)
         
            if(this.imageSelectedSource){
              this.imageSelected = arrayImages[i]
              i++
            }
         
            this.envoyerRequest(this.imageSelected)
          }else{
            alert(this.notificationService.alertNotConnexion)
            this.isLoading = false;
            return 
          }

        }, err => {
          alert(this.notificationService.alertNotConnexion)
          this.isLoading = false;
          return 
        }
      );

    
  }

  envoyerRequest(image){
    
    let request:any = this.getRequest(image)
    console.log(request)

    this.http.post(this.userService.baseURL+"/user/updateFormateur", request, 
    {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        let response:any = res
        this.isLoading = false; 
    
        if(response.status){
          this.notificationService.showSuccess(this.notificationService.sucessProduitEnregistrer, "Message")
        }else{
          this.notificationService.showSuccess(response.message, "Message")
        }

       // this.inisialiserProduit(this.formation.id)
        
      }, err => {
        alert(this.notificationService.alertNotConnexion)
        console.log(err)
        this.isLoading = false; 
      }
    );
    
  }

  
  getRequest(image){

    
    let newlistFormations = []
    for(let i = 0; i < this.listFormations.length; i++){
      newlistFormations.push({title: this.listFormations[i].title, value:this.listFormations[i].value})
    }

    let newlistStages = []
    for(let i = 0; i < this.listStages.length; i++){
      newlistStages.push({title: this.listStages[i].title, value:this.listStages[i].value})
    }

    let newlistExperiences = []
    for(let i = 0; i < this.listExperiences.length; i++){
      newlistExperiences.push({title: this.listExperiences[i].title, value:this.listExperiences[i].value})
    }
    
    let request = {categories:[], formations:[],  experiences:[], stages:[], image:"",  nom:""}

   
    request["categories"] = this.listCategories
    request["formations"] = newlistFormations 
    request["experiences"] = newlistExperiences
    request["stages"] = newlistStages
    
    request["image"] = image
   
    
    request["nom"] = this.formC.value.nom
    request["prenom"] = this.formC.value.prenom
    request["telephone"] = this.formC.value.telephone
    request["specialites"] = this.formC.value.specialites
    request["adresse"] = this.formC.value.adresse
    request["ville"] = this.formC.value.ville
    request["pays"] = this.formC.value.pays
    request["email"] = this.formC.value.email
    request["password"] = this.formC.value.password
    request["codePostal"] = this.formC.value.codePostal
    request["confirmePassword"] = this.formC.value.confirmePassword
    request["company"] = this.formC.value.company
    request["newEmail"] = this.formC.value.newEmail
    request["newPassword"] = this.formC.value.newPassword
  
   
    return request
  }

}