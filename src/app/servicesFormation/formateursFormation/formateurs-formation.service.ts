import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateursFormationService {
  newFormateurs :any
 

  varFormateurs=[]
  formateurs=new BehaviorSubject(this.varFormateurs)
  formateursChange=this.formateurs.asObservable()  
 
  constructor(private http: HttpClient) {
     
     this.newFormateurs = this.http.get("./assets/constantes/formateurs.json").subscribe(res => {
       this.newFormateurs = res
       if(this.newFormateurs){
         this.varFormateurs = this.newFormateurs
         this.formateurs.next(this.newFormateurs)
       }
     })
 
  }
 
}
 