import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeadersService } from 'src/app/services/headers.service';
import { Header } from './interfaces/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header[] = [];

  constructor(  private route: ActivatedRoute, 
                private headerServices: HeadersService,
                private router: Router) {}

  ngOnInit(): void {
    this.getHeader();
    console.log('llama header');
  }

  getHeader(): void {
    const id = this.router.url.replace('/','');
    //const id = this.route.snapshot.paramMap.get('id')!; para obtener desde url como un id
    this.headerServices.getHeaderById(id).subscribe(res => this.header = res)
  }
}
