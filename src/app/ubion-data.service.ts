import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Data } from './core';

@Injectable({
  providedIn: 'root'
})
export class UbionDataService {
  data : Observable<Data> = new Observable;

  constructor(private http:HttpClient) {
    this.data = http.get<Data>("https://sourdeval.github.io/ubion-data/data1.json");
   }

   getData(): Observable<Data> {
    return this.data;
   }
}
