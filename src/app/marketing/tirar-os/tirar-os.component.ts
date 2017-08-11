import { Component, OnInit } from '@angular/core';
import { TestpresseroService } from '../../services/testpressero.service';

@Component({
  selector: 'app-tirar-os',
  templateUrl: './tirar-os.component.html',
  styleUrls: ['./tirar-os.component.css']
})
export class TirarOsComponent implements OnInit {

  constructor(private teste: TestpresseroService) {}
  pegou = '';

  resultado() {
    this.pegou = this.teste.pegaresultado();
    return this.pegou;
  }

  ngOnInit() {

  }

}
