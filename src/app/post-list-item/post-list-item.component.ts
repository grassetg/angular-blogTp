import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts += 1;
  }

  onDontLoveIt() {
    this.post.loveIts -= 1;
  }
}
