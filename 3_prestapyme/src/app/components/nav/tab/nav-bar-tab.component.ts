import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavtabService } from 'src/app/services/navtab.service';
import { Navtab } from './interfaces/navtab';

@Component({
  selector: 'app-nav-bar-tab',
  templateUrl: './nav-bar-tab.component.html',
  styleUrls: ['./nav-bar-tab.component.css']
})
export class NavBarTabComponent implements OnInit {

  navtab: Navtab[] = [];
  url: string = '';

  constructor(  private route: ActivatedRoute, 
                private navtabServices: NavtabService,
                private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.getNavTab();
  }

  getNavTab(): void {
    const index = this.router.url.indexOf("-");
    const id = this.router.url.substring(1,index);

    //const id = this.route.snapshot.paramMap.get('id')!; para obtener el id desde url como un parametro
    this.navtabServices.getNavTabById(id).subscribe(res => this.navtab = res);
  }
}
