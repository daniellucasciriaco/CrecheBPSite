import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Services */
import { NewsService } from '../services/news.service';

/* Models */
import { News } from '../models/news';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  news: Array<News> = new Array<News>();
  loading = false;

  constructor(private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.newsService.onChilAddedSucess.subscribe(data => {
      this.router.navigate(['noticias']);
      this.news = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  onClickNews(news: News) {
    environment.noticia = news;
    this.router.navigate(['noticia']);
  }

}
