import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { Thomas } from './thomas-interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  serverJson$: Observable<Thomas> | undefined;
  title = "Hypermedia-Application";
  
  constructor (private service: Service) { }
  
  ngOnInit(): void {
    this.serverJson$ = this.service.get();
  }
}
