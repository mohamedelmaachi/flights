import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(){

      return localStorage.getItem("token")!=null ? true : false;
  }
  public getUserType(){

    return localStorage.getItem("user_type");
  }
  public setToken(token){

    return localStorage.setItem("token",token);
  }
  public getToken(){

    return localStorage.getItem("token");
  }
}
