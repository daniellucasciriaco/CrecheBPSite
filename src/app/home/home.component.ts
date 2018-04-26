import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

/* Services */
import { AuthService } from '../services/auth.service';
import { FeedbackService } from '../services/feedback.service';
import { WorkWithUsService } from '../services/work-with-us.service';

/* Models */
import { WorkWithUs } from '../models/work-with-us';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = '';
  email = '';
  message = '';
  subject = '';
  formulario: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private feedbackService: FeedbackService, private authService: AuthService, private workWithUsService: WorkWithUsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authService.anonimous();
    this.feedbackService.onNewsSucess.subscribe(data => {
      alert('Mensagem enviada com sucesso!');
    });
    this.feedbackService.onNewsError.subscribe(data => {
      alert('Sua mensagem não foi enviada, tente novamente mais tarde.');
    });

    this.workWithUsService.onNewsSucess.subscribe(data => {
      alert('Apresentação enviada com sucesso!');
    });
    this.workWithUsService.onNewsError.subscribe(data => {
      alert('Sua apresentação não foi enviada, tente novamente mais tarde.');
    });
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.name = this.formulario.get('name').value;
      this.email = this.formulario.get('email').value;
      this.message = this.formulario.get('message').value;
      this.subject = this.formulario.get('subject').value;
      if (this.subject === 'M') {
        const feedback = new Feedback();
        feedback.Nome = this.name;
        feedback.Email = this.email;
        feedback.Mensagem = this.message;
        this.feedbackService.addObject(feedback);
        // document.getElementById('name').value = '';
        // document.getElementById('email').value = '';
        // document.getElementById('message').value = '';
        alert('Mensagem enviada com sucesso!');
      } else {
        const workWithUs = new WorkWithUs();
        workWithUs.Nome = this.name;
        workWithUs.Email = this.email;
        workWithUs.CartaApresentacao = this.message;
        this.workWithUsService.addObject(workWithUs);
        // document.getElementById('name').value = '';
        // document.getElementById('email').value = '';
        // document.getElementById('message').value = '';
        alert('Apresentação enviada com sucesso!');
      }
    }
  }
}
