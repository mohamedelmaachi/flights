import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-air-line-details',
  templateUrl: './air-line-details.component.html',
  styleUrls: ['./air-line-details.component.scss']
})
export class AirLineDetailsComponent implements OnInit {


  data = null;
  options=null;
  headers=null;
 
  constructor(private httpClient: HttpClient,private router:ActivatedRoute) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.getDetails()
   }

  public getDetails(){
    let code = this.router.snapshot.paramMap.get("code")
     this.httpClient.get("http://localhost:8081/airlines/"+code+"/flights",{ headers: this.headers }).subscribe((data: any[])=>{
      console.log(data);
      this.data = data.map((item) => {

        item.departureDate = this.changeDate(item.departureDate );
        item.arrivalDate = this.changeDate(item.arrivalDate );

        return item;

      });
      
    })  ;
  }
 
  public changeDate(date) {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let hours = date.getHours() + 5;
    let min = date.getMinutes();
    let dt = date.getDate();

    if (hours > 24) {
      dt = dt + 1;
      hours = hours - 24;
    }
    if (hours < 10) {
      hours = '0' + hours
    }
    if (dt < 10) {
      dt = '0' + dt
    }
    if (min < 10) {
      min = '0' + min
    }
    return year + '-' + month + '-' + dt + ' ' + hours + ':' + min;
  } 

  ngOnInit() {   }



}
