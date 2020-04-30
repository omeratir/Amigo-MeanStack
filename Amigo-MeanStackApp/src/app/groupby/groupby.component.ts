import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subscription, of } from 'rxjs';
import { PostsService } from '../posts/posts.service';

@Component({
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.css']
})

export class GroupByComponent implements OnInit {
posts: any;
postsService: PostsService;

constructor(postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getGroupBy();
    console.log(this.posts);
  }

}
