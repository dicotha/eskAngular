import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
@Component({
  selector: 'app-tirar-os',
  templateUrl: './tirar-os.component.html',
  styleUrls: ['./tirar-os.component.css']
})
export class TirarOsComponent implements OnInit {
  workflows = '';
  constructor(private http: Http) {}
  pegaresultado() {
    const url = 'https://admin.chi.v6.pressero.com/api/Workflows';
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization' : 'token E368EE42-169F-494F-8F31-CFAC19AAA080'
    };
    const headerObj = {headers: new Headers(headerDict)};
    this.http.get(url, headerObj).subscribe(
      (res: Response) => {
        const resposta = res.json();
        this.workflows = resposta.Items[1].Description;
        console.log(this.workflows);
      }
    );
  }
  ngOnInit() {
  }

}
