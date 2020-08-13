import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  airlines = [];
  options = null;
  headers = null;
  modal = false;
  isUpdate = false;

  editForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    history: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    street: new FormControl(),
    state: new FormControl(),
  });

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.sendGetRequest()
  }

  public sendGetRequest() {
    this.httpClient.get("http://localhost:8081/airports", { headers: this.headers }).subscribe((data: any[]) => {
      console.log(data);
      this.airlines = data;
      this.modal = false;

    });
  }

  public delete(code) {

    this.httpClient.delete("http://localhost:8081/airports/" + code, { headers: this.headers }).subscribe((data: any[]) => {
      this.sendGetRequest()
    });
  }

  public prepareToUpdate(item) {

    console.log(item)
    this.editForm.controls["name"].setValue(item.name);
    this.editForm.controls["history"].setValue(item.history);
    this.editForm.controls["code"].setValue(item.code);
    this.editForm.controls["state"].setValue(item.address.state);
    this.editForm.controls["street"].setValue(item.address.street);
    this.editForm.controls["city"].setValue(item.address.city);
    this.editForm.controls["zip"].setValue(item.address.zip);
    this.modal = true;
    this.isUpdate = true;
  }

  public add() {

    this.editForm.reset();
    this.isUpdate = false;
    this.editForm.controls["name"].setValue("test");
    this.editForm.controls["history"].setValue("lorem ispsum dolor");
    this.editForm.controls["code"].setValue("MED");
    this.editForm.controls["state"].setValue("IOWA");
    this.editForm.controls["street"].setValue("MIU");
    this.editForm.controls["city"].setValue("FAIRFIELD");
    this.editForm.controls["zip"].setValue("40780");
    this.modal = true;
  }

  public sendUpdate() {
    let data=this.editForm.value;
    data= {address :{
      state:this.editForm.value.state,
      city:this.editForm.value.city,
      zip:this.editForm.value.zip,
      street:this.editForm.value.street,
    },
    name:this.editForm.value.name,
    code:this.editForm.value.code,
    history:this.editForm.value.history
  };
    
    if (this.isUpdate) {
      this.httpClient.put("http://localhost:8081/airports/"+this.editForm.controls["code"].value,data).subscribe((data: any[])=>{
        this.sendGetRequest();
      })  ;
    }else{
      this.httpClient.post("http://localhost:8081/airports",[data]).subscribe((data: any[])=>{
        this.sendGetRequest();
      })  ;
    }
  }

  ngOnInit() { }



}
