import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subscription, of } from 'rxjs';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-group',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.css']
})

export class GroupByComponent implements OnInit {
posts: Post[];
data = [];
show = false;
private postsSub: Subscription;

postsPerPage = 100;
currentPage = 1;
totalPosts = 0;

constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((postData: { posts: Post[]; postCount: number }) => {
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });

    // this.postsService.getGroupBy().subscribe((d: any) => {
    //   console.log('data = ' + d);
    //   this.data = d;
    //   if (this.data.length === 0) {
    //     this.show = false;
    //   } else {
    //     this.show = true;
    //   }
    //   console.log('show = ' + this.show);
    // });

  }

}


