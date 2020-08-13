import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})


export class AirlineComponent implements OnInit {

  airlines = [];
  options = null;
  headers = null;
  modal = false;
  isUpdate = false;
  editForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    history: new FormControl()
  });

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.sendGetRequest()
  }

  public sendGetRequest() {
    this.httpClient.get("http://localhost:8081/airlines", { headers: this.headers }).subscribe((data: any[]) => {
      console.log(data);
      this.airlines = data;
      this.modal = false;

    });
  }

  public delete(code) {

    this.httpClient.delete("http://localhost:8081/airlines/" + code, { headers: this.headers }).subscribe((data: any[]) => {
      this.sendGetRequest()
    });
  }

  public add() {

    this.editForm.reset();
    this.isUpdate = false;
    this.editForm.controls["name"].setValue("Royal AIR Maroc");
    this.editForm.controls["history"].setValue("lorem ispsum dolor");
    this.editForm.controls["code"].setValue("RAM");

    this.modal = true;
  }

  public prepareToUpdate(item) {
    this.isUpdate = true
    this.editForm.controls["name"].setValue(item.name);
    this.editForm.controls["history"].setValue(item.history);
    this.editForm.controls["code"].setValue(item.code);
    this.modal = true;
  }

  public sendUpdate() {

    if (this.isUpdate) {
      this.httpClient.put("http://localhost:8081/airlines/" + this.editForm.controls["code"].value, this.editForm.value).subscribe((data: any[]) => {
        this.sendGetRequest();
      });
    } else {
      this.httpClient.post("http://localhost:8081/airlines/", [this.editForm.value]).subscribe((data: any[]) => {
        this.sendGetRequest();
      });
    }

  }

  ngOnInit() { }



}
