import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { Observable } from 'rxjs';
import { HalFormsDocument } from './hal-forms-document-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  createTemplate$: Observable<HalFormsDocument> | undefined;
  title = "Hypermedia-Application";

  constructor(private _service: Service) { }

  ngOnInit(): void {
    this.createTemplate$ = this._service.getCreateTemplate();
    console.log(this.createTemplate$);
  }
}
