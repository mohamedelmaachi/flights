import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class HandleResponse {

  constructor() {
  }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 500:
        // Do something
        break;
      case 401:
        // Do something
        break;
      case 400:
        // Do something
        break;
      case 403:
        // Do something
        break;
      case 404:
        // Do something
        break;
    }
  }

  handleData(data: any) {
    switch (data._response.code) {
      case 'U200-01':
        // Do something
        break;
      case 'U200-02':
        // Do something
        break;
    }
  }


}
