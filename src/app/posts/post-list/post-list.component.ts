import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
/*  storedPost = [
    {title: 'First Post', content: 'Da ist first post\'s content'},
    {title: 'Second Post', content: 'Da ist second post\'s content'},
    {title: 'Third Post', content: 'Da ist third post\'s content'}
  ];*/
  @Input() posts = [];
}
