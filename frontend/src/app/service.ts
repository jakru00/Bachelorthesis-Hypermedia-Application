import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thomas } from './thomas-interface';
import { Observable } from 'rxjs';
import { HalFormsDocument } from './hal-forms-document-interface';

@Injectable({
  providedIn: 'root'
})
export class Service {
  readonly baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCreateTemplate(): Observable<HalFormsDocument> {
    return this.http.get<HalFormsDocument>(`${this.baseUrl}rels/patients/create`);
  }
}
