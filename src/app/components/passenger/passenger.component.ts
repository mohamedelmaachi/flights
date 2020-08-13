import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  airlines = [];
  options=null;
  headers=null;
  modal=false;

  editForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    history: new FormControl()});

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.sendGetRequest()
   }

  public sendGetRequest(){
     this.httpClient.get("http://localhost:8082/passengers",{ headers: this.headers }).subscribe((data: any[])=>{
      console.log(data);
      this.airlines = data;
      this.modal=false;
      
    })  ;
  }

  public delete(code){

    this.httpClient.delete("http://localhost:8081/airlines/"+code,{ headers: this.headers }).subscribe((data: any[])=>{
      this.sendGetRequest()
   })  ;
 }

 public prepareToUpdate(item){
  
  this.editForm.controls["name"].setValue(item.name);
  this.editForm.controls["history"].setValue(item.history);
  this.editForm.controls["code"].setValue(item.code);
  this.modal=true;
 }

 public sendUpdate(){
  this.httpClient.put("http://localhost:8081/airlines/"+this.editForm.controls["code"].value,this.editForm.value).subscribe((data: any[])=>{
    this.sendGetRequest();
  })  ;
 }

  ngOnInit() {   }



}
