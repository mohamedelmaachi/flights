import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import { Location } from '@angular/common';
import {MENU} from "@app/config";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  nodes: any;
  constructor(private location: Location,private router: Router,public title: Title, private route: ActivatedRoute) {
    router.events.subscribe(() => {
      this.setElementByRouteName();
      this.setPageTitle();
    });
  }

  ngOnInit() {
    this.setElementByRouteName();
  }

  // Affecte un titre a la page courante depuis la constante MENU
  setPageTitle(){
    if (this.nodes !== undefined) {
      if(this.nodes.sidebarName === this.nodes.name){
        this.title.setTitle(this.nodes.sidebarName);
      }
      else{
        this.title.setTitle(this.nodes.sidebarName +' / '+ this.nodes.name);
      }
    }
  }

  // Affecte un menu breadcrumb pour une route donnée
  setElementByRouteName(): void{
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.nodes = this.getMenuItemByRouteName(route.data.route);
      });
  }

  getMenuItemByRouteName(routeName: string): any {
    let menu: any = null;
    for (const item of MENU) {
      if (item['routeName'] === routeName) {
        menu = item;
      }
    }

    return menu;
  }

}
