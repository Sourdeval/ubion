import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetDomain, Data } from './core';

@Injectable({
  providedIn: 'root'
})
export class UbionDataService {
  data : Observable<Data> = new Observable;
  budget : Observable<BudgetDomain[]> = new Observable;

  constructor(private http:HttpClient) {
    let head = new HttpHeaders({'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    let opt = {
      headers : head
    }
    if (isDevMode()) {
      this.data = http.get<Data>("https://sourdeval.github.io/ubion-data/data1.json");
      this.budget = http.get<BudgetDomain[]>("https://sourdeval.github.io/ubion-data/budget1.json");
    } else {
      this.data = http.get<Data>("https://sourdeval.github.io/ubion-data/data1.json", opt);
      this.budget = http.get<BudgetDomain[]>("https://sourdeval.github.io/ubion-data/budget1.json", opt);
    }
   }

   getData(): Observable<Data> {
    return this.data;
   }

   getBudget(): Observable<BudgetDomain[]>{
    return this.budget;
   }
}
