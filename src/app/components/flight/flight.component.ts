import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  data = [];
  options = null;
  headers = null;
  modal = false;
  isUpdate = false;

  editForm = new FormGroup({
    number: new FormControl(),
    capacity: new FormControl(),
    departureAirportCode: new FormControl(),
    arrivalAirportCode: new FormControl(),
    departureDate: new FormControl(),
    arrivalDate: new FormControl(),
    airlineCode: new FormControl()
  });

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers();
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    this.sendGetRequest()

  }

  public sendGetRequest() {
    let _this = this;
    this.httpClient.get("http://localhost:8081/flights", { headers: this.headers }).subscribe((data: any[]) => {

      this.data = data.map((item) => {

        item.departureDate = this.changeDate(item.departureDate);
        item.arrivalDate = this.changeDate(item.arrivalDate);

        return item;

      });
      this.modal = false;
      console.log(this.data);
    });
  }

  public delete(code) {

    this.httpClient.delete("http://localhost:8081/flights/" + code, { headers: this.headers }).subscribe((data: any[]) => {
      this.sendGetRequest()
    });
  }

  public prepareToUpdate(item) {


    this.isUpdate = true;
    this.editForm.controls["number"].setValue(item.number);
    this.editForm.controls["capacity"].setValue(item.capacity);
    this.editForm.controls["departureAirportCode"].setValue(item.departureAirport.code);
    this.editForm.controls["arrivalAirportCode"].setValue(item.arrivalAirport.code);
    this.editForm.controls["departureDate"].setValue(this.changeDate(item.departureDate));
    this.editForm.controls["arrivalDate"].setValue(this.changeDate(item.arrivalDate));
    this.editForm.controls["airlineCode"].setValue(item.airline.code);
    this.modal = true;
  }

  public add() {
    this.isUpdate = false;
    this.editForm.reset();
    this.modal = true;

    this.editForm.controls["number"].setValue("44444");
    this.editForm.controls["capacity"].setValue(55555);
    this.editForm.controls["departureAirportCode"].setValue("ORD");
    this.editForm.controls["arrivalAirportCode"].setValue("JFK");
    this.editForm.controls["departureDate"].setValue("2020-02-15 02:00");
    this.editForm.controls["arrivalDate"].setValue("2020-02-15 05:00");
    this.editForm.controls["airlineCode"].setValue("UA");
  }

  public sendUpdate() {
    let data = this.editForm.value;
    if (this.isUpdate )
    {
      
    this.httpClient.put("http://localhost:8081/flights/" + this.editForm.controls["number"].value, data).subscribe((data: any[]) => {
      this.sendGetRequest();
      this.modal = false;
    })}
    else {
      this.httpClient.post("http://localhost:8081/flights", [data],{headers : this.headers}).subscribe((data: any[]) => {
        this.sendGetRequest();
        this.modal = false;
      });
    }
  }

  public changeDate(date) {
    date = new Date(date);
    date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let hours = date.getHours();
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



  ngOnInit() { }



}
