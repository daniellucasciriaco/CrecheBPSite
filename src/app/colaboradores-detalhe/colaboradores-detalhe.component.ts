import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-colaboradores-detalhe',
  templateUrl: './colaboradores-detalhe.component.html',
  styleUrls: ['./colaboradores-detalhe.component.css']
})
export class ColaboradoresDetalheComponent implements OnInit {
  collaborator: any = {};

    constructor() { }

    ngOnInit() {
      this.collaborator = environment.colaboradores;
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
