import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFormationService {

  newCategories :any
 

  varCategories=[]
  categories=new BehaviorSubject(this.varCategories)
  categoriesChange=this.categories.asObservable()  
 
  constructor(private http: HttpClient) {
     
     this.newCategories = this.http.get("./assets/constantes/categories.json").subscribe(res => {
       this.newCategories = res
       if(this.newCategories){
         this.varCategories = this.newCategories
         this.categories.next(this.newCategories)
       }
     })
 
  }
 
}
 