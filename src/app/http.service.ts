import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Unit{
  r030:number,
  txt:string,
  rate:number,
  cc:string,
  exchangedate:string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    
  }

  getData(){
    return this.http.get<Unit[]>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
  }
  
}
