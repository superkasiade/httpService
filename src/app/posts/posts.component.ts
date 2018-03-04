import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private http: Http ) { 
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response.json(), 
        () => console.log('error'));
  }

  ngOnInit() {
  }

}
