import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { finalize, delay } from 'rxjs/operators';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading:boolean;
  isError:boolean;
  
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()});

  constructor(private httpClient: HttpClient,private auth:AuthService,private router: Router) {
    this.isLoading=false;
    this.isError=false;
   }

  ngOnInit() {  }

  login(){
    this.isLoading=true;
    
    this.httpClient.post("http://localhost:8080/login",this.loginForm.value).subscribe( 
      (data:any) => {

        this.isError=false;
        this.auth.setToken(data.accessToken);
        window.location.replace("http://localhost:4200/airlines");
       
              
      
  },
  error => {
    this.isError=true;
    this.isLoading=false;
  },)  ;
  }

}
