import {Directive, HostListener, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config';
import {NavigationHelper} from "@app/helpers";

@Directive({
  selector: '[custom-routerLink]'
})

export class RouterlinkCustom {
  constructor(private router: Router, private navigationHelper: NavigationHelper) {}

  @Input('custom-routerLink') routerLink: any;

  @HostListener('click') onClick() {
    this.navigationHelper.navigate(this.routerLink);
  }
}

