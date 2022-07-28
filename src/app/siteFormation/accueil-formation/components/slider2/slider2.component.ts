import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.autoSlider()
    
  }

  pos = 0

  autoSlider(){
    setTimeout(()=>{ 
      if(this.nbrAuto == 0){
        this.setPos(this.pos + 1)
      }

      this.autoSlider() 
    }, 5000);
  }

  nbrAuto = 0
  
  setPosManuelle(pas){
    this.setPos(this.pos + pas)
    this.nbrAuto++
    
    setTimeout(()=>{ 
      if(this.nbrAuto > 0){
        this.nbrAuto--
      }
    }, 6000);
  }

  setPos(newPos){

    console.log("setPos")
    var list = document.getElementsByClassName("item-slider2")

    for(let i = 0; i < list.length; i++){
      var className = list[i].getAttribute("class")
      className = className.replace("active", "")
      list[i].setAttribute("class", className)
    }

    if(newPos > (list.length-1)){
         newPos = 0
    }else if(newPos < 0){
         newPos = list.length-1
    }

    var className = list[newPos].getAttribute("class")
    list[newPos].setAttribute("class", className+ " active")
    this.pos = newPos
  }
  

}
