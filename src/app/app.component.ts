import { Component } from '@angular/core';
import { TranslateService } from '@app/pipes';
import { AuthService } from './services/auth.service';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAutenticated:boolean;

  constructor(private _translate: TranslateService,private AuthService:AuthService){


    this.isAutenticated =AuthService.isAuthenticated();
   // alert(this.isAutenticated)

    this._translate.use(localStorage.getItem('lang'));
    $(document).on('show.bs.modal', '.modal', function () {
      var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
      setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
      }, 0);
    });
  }
}
