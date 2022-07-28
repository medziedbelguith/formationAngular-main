import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesFormationService } from '../../servicesFormation/categoriesFormation/categories-formation.service'
import { UserService } from '../../servicesFormation/user/user.service'
import { ProduitsFormationService } from '../../servicesFormation/produitsFormation/produits-formation.service'
import { NotificationService } from '../../servicesFormation/notification/notification.service'

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  
  formC:FormGroup

  fileSources = []

  categories = []

  caracteristiques = []

  listCategoriesShema=[]
  listCategories=[]
  listDescriptionsDessous=[]
  listDescriptionsDessus=[]
  
  longDesc

  constructor( private domSanitizer:DomSanitizer, private notificationService:NotificationService, private http: HttpClient, private categoriesServices: CategoriesFormationService, private userService:UserService, public productService:ProduitsFormationService) { 
    
    this.formC = new FormGroup({
      nomFormateur:new FormControl('',[Validators.required, Validators.min(1)]),
   
      adresse:new FormControl('',[Validators.required, Validators.min(1)]),
      telephone:new FormControl('',[Validators.required, Validators.min(1)]),
      email:new FormControl('',[Validators.required, Validators.min(1)]),
   
      timeDepart:new FormControl('',[Validators.required, Validators.min(1)]),
      timeEnd:new FormControl('',[Validators.required, Validators.min(1)]),
   
      date:new FormControl('',[Validators.required, Validators.min(1)]),
      
   
      specialites:new FormControl('',[Validators.required, Validators.min(1)]),
   
      titre1:new FormControl('',[Validators.required, Validators.min(1)]),
      titre2:new FormControl('',[Validators.required, Validators.min(1)]),
     
      ligne:new FormControl('',[Validators.required, Validators.min(1)]),
  
      file: new FormControl('', [Validators.required]),
      file2: new FormControl('', [Validators.required]),
  
     })

  }

  photoURL(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  isOnLine=1
  setOnline(pos){
    this.isOnLine = pos
  }

  
 

  get f(){
    return this.formC.controls;
  }

  ngOnInit(): void {
  }

  
 
  // Gestion des DescriptionDessus --fin--

  // Gestion des photos --debut--
  multiImage
  imageSelected
  imageSelectedSource

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


 // Gestion des photos --debut--
 multiImage2
 imageSelected2
 imageSelectedSource2

 selectedM2(event) {
    this.multiImage2 = event.target.files;
    
    var files = event.target.files;
    if (files.length === 0)
    return;

    this.imageSelectedSource2 = files[0]
    
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
     // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imageSelected2 = reader.result
    }
 }


  
  // Gestion des DescriptionDessus --debut--

  descriptionDessusSelected = {id:-1, ligne:""}

  ajouteDescriptionDessus(){
    if(this.formC.value.description != ""){
      this.listDescriptionsDessus.push({ligne:this.formC.value.ligne, id:this.listDescriptionsDessus.length})
      this.intialiseDescriptionDessus()
    }
  }

  removeDescriptionDessus(id){
    this.listDescriptionsDessus = this.listDescriptionsDessus.filter(x => x.id != id)
    this.intialiseDescriptionDessus()
  }

  selectedDescriptionDessus(id){
    let item = this.listDescriptionsDessus.filter(x => x.id == id)
    if(item.length > 0){
      this.descriptionDessusSelected = item[0]
      this.formC.patchValue({ligne: this.descriptionDessusSelected.ligne});
    }
  }

  modifieDescriptionDessus(){
    for(let i = 0; i < this.listDescriptionsDessus.length; i++){
      if(this.listDescriptionsDessus[i].id == this.descriptionDessusSelected.id){
        this.listDescriptionsDessus[i].ligne = this.formC.value.ligne
      }
    }
    this.intialiseDescriptionDessus()
  }

  intialiseDescriptionDessus(){
    this.formC.patchValue({ligne: ""});
    this.descriptionDessusSelected = {id:-1, ligne:""}
  }

  // Gestion des DescriptionDessus --fin--

  // Gestion des photos --fin--

  isLoading = false;
  erreurString = []
  isErreurs = false;

  chargerErreurs(){
    this.erreurString = []
    this.isErreurs = false
  
   if(!this.multiImage) this.erreurString.push("SVP inserez l'image")  
    
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

    if(this.imageSelectedSource2){
      allImages.push({image:this.imageSelectedSource2})
    }
   
    if(allImages.length > 0){
 
      const formData = new FormData();
      this.isLoading = true
      for (let img of allImages){
        formData.append('myFiles', img.image)
      }
      
      this.http.post(this.userService.baseURL+"/produit/upload", formData).subscribe(
        res => {
          
          var arrayImages: any = res
          
          if(arrayImages.length > 0){
            
           
             let i = 0

            if(this.imageSelectedSource){
              this.imageSelected = arrayImages[i]
            }
        
            if(this.imageSelectedSource2){
              i++
              this.imageSelected2 = arrayImages[i]
            }

            this.envoyerRequest(this.imageSelected, this.imageSelected2)

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

  }

  envoyerRequest(image, image2){
    
    let request:any = this.getRequest(image, image2)

    this.http.post(this.userService.baseURL+"/event/newEvent", request, 
    {
      headers: {
          "authorization": 'Bearer '+localStorage.getItem(this.userService.tokenString)
      }
    }).subscribe(
      res => {
        this.notificationService.showSuccess(this.notificationService.sucessProduitEnregistrer, "Message")
        this.formC.patchValue({nom: ""});
        //this.formC.body.reset()
        this.fileSources = []
        this.isLoading = false; 
      }, err => {
        alert(this.notificationService.alertNotConnexion)
        console.log(err)
        this.isLoading = false; 
      }
    );
    
  }

  
  getRequest(image, image2){

    let request = 
    {
      nomFormateur:"",
      imageFormateur:"",
      adresse:"",
      telephone:"",
      email:"",
      timeDepart:"",
      timeEnd:"",
      date:"",
      specialites:"",
      titre1:"",
      titre2:"",
      descriptions:[],
      image:""
    }
    
    let newDescription = []
    for(let i = 0; i < this.listDescriptionsDessus.length; i++){
      newDescription.push({ligne:this.listDescriptionsDessus[i].ligne})
    }

    request.nomFormateur= this.formC.value.nomFormateur
    request.imageFormateur= image2
 
    request.adresse= this.formC.value.adresse
    request.telephone= this.formC.value.telephone
    request.email= this.formC.value.email
 
    request.timeDepart= this.formC.value.timeDepart
    request.timeEnd= this.formC.value.timeEnd
 
    request.date= this.formC.value.date
    
 
    request.specialites= this.formC.value.specialites
 
    request.titre1= this.formC.value.titre1
   
    request.titre2= this.formC.value.titre2
   
    request.descriptions = newDescription

    request.image = image
  
    return request
  }

}