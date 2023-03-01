import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app/http.service';
import type {Unit} from "../app/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[HttpService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular_currency';

  units!:Unit[];
  currentUnit:Unit={rate:0, cc:"", exchangedate:"", r030:0, txt:""};

  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.http.getData().subscribe((units:Unit[])=>{this.units=units; this.currentUnit=units[24]})
  }

  onSelectedUnit($event:any){
    this.currentUnit = this.units.find((unit)=>unit.cc==$event.target.value)!;
  }

}
