import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Injectable()

export class TestpresseroService {

  workflows = '';

  constructor(private http: Http) {}

  pegaresultado() {
    const url = 'https://admin.chi.v6.pressero.com/api//V2/Orders/11102/Items';
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization' : 'token '
    };

    const headerObj = {headers: new Headers(headerDict)};

    this.http.get(url, headerObj).subscribe(
      (res: Response) => {
        const resposta = res.json();
        this.workflows = resposta['0'].Product.ProductName;
        console.log(resposta);
        console.log(this.workflows);
      }
    );
    return this.workflows;
  }






}
