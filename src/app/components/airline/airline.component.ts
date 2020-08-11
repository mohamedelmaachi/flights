import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {

  airlines = [];
  options=null;
  headers=null;

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.sendGetRequest()
   }

  public sendGetRequest(){
     this.httpClient.get("http://localhost:8081/airlines",{ headers: this.headers }).subscribe((data: any[])=>{
      console.log(data);
      this.airlines = data;
    })  ;
  }

  ngOnInit() { // this.sendGetRequest();
  }



}
