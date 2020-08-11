import { NgModule } from '@angular/core';
import { SharedModule } from '@app/modules';
import { RouterModule } from '@angular/router';
import { authRoutes, Auth } from '@app/components';

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    SharedModule
  ],
  declarations: [
    Auth
  ],

})
export class AuthModule {

}
