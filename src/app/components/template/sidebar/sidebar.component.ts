import { Component } from '@angular/core';
import { MENU } from '@app/config';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  nodes: any[];
  data;
  user_name;
  role;
  baseUrl;
  authBaseUrl: string;

  constructor(private router:Router){
    this.getMenuItems();
  }

  logout(){
    localStorage.clear();
    window.location.replace("http://localhost:4200/login");
  }

  // Recupère les menus a partir de la liste MENU
  getMenuItems(){
    this.nodes=[];
    let i = 0;
    for(var element in MENU){
      if(MENU[i]['isMenu']){
        if(this.nodes == undefined){
          this.nodes = [MENU[i]];
        }
        else{
          this.nodes.push(MENU[i]);
        }
      }
      i++;
    }
  }
}
