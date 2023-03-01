import {Component, EventEmitter, Input, Output} from '@angular/core';
import type { Unit } from '../http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() units!:Unit[];
  @Input() currentUnit!:Unit;

  @Output() selectedUnit = new EventEmitter();

  firstUnit=0;
  secondUnit=0;

  onInput($event:any){
    let inputNumber:number = parseFloat($event.target.value);
    if($event.target.id=="firstUnit"){
      this.secondUnit=(inputNumber / this.currentUnit.rate)?(inputNumber / this.currentUnit.rate):0;
    }
    else{
      this.firstUnit=(inputNumber * this.currentUnit.rate)?(inputNumber * this.currentUnit.rate):0;
    }
  }

  onSelected($event:any){
    this.firstUnit=0;
    this.secondUnit=0;
    this.selectedUnit.emit($event);
  }
  
}
