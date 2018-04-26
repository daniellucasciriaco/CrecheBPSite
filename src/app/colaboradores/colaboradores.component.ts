import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Services */
import { CollaboratorService } from '../services/collaborator.service';

/* Models */
import { Collaborator } from '../models/collaborator';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  collaborators: Array<Collaborator> = new Array<Collaborator>();
  doadores: Array<Collaborator> = new Array<Collaborator>();
  voluntarios: Array<Collaborator> = new Array<Collaborator>();
  loading = false;

  constructor(private collaboratorService: CollaboratorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.collaboratorService.onChilAddedSucess.subscribe(data => {
      this.router.navigate(['colaboradores']);
      this.collaborators = data;
      this.collaborators.forEach(element => {
        if (element.Tipo === 'D') {
          this.doadores.push(element);
        } else {
          this.voluntarios.push(element);
        }
      });
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  onClickCollaborator(collaborator: Collaborator) {
    environment.colaboradores = collaborator;
    this.router.navigate(['colaborador']);
  }
}
