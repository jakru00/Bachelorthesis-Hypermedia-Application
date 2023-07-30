import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thomas } from './thomas-interface';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Thomas>('http://localhost:3000/');
  }
}
