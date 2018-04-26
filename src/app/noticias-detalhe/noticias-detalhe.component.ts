import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-noticias-detalhe',
  templateUrl: './noticias-detalhe.component.html',
  styleUrls: ['./noticias-detalhe.component.css']
})
export class NoticiasDetalheComponent implements OnInit {
  news: any = {};

  constructor() { }

  ngOnInit() {
    this.news = environment.noticia;
  }

}
