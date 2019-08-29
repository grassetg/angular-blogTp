import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  postsInit = [
    new Post('Mon super post',
      'Ceci est mon premier post et il est déjà chouette' ,
      1),
    new Post('La Terre est plate',
      'Parce que, il faut se l\'avouer c\'est vrai',
      -42),
    new Post('Rien à dire',
      'On est obligé de marquer quelquechose ?',
      0)
  ];
}

export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}
