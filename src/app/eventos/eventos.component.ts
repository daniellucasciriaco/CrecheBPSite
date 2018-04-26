import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Services */
import { EventService } from '../services/event.service';

/* Models */
import { Event } from '../models/event';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  events: Array<Event> = new Array<Event>();
  loading = false;

  constructor(private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.eventService.onChilAddedSucess.subscribe(data => {
      this.router.navigate(['eventos']);
      this.events = data;
      this.loading = false;
    });
  }

  ngOnInit() {
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

  onClickEvent(event: Event) {
    environment.evento = event;
    this.router.navigate(['evento']);
  }
}
