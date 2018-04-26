import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-eventos-detalhe',
  templateUrl: './eventos-detalhe.component.html',
  styleUrls: ['./eventos-detalhe.component.css']
})
export class EventosDetalheComponent implements OnInit {
  event: any = {};

  constructor() { }

  ngOnInit() {
    this.event = environment.evento;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março',
      'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro',
      'Novembro', 'Dezembro'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
  }

}
