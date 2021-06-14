import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/validators/app-errors';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any; 
  constructor(private service: PostService) {
  }

   //lifecycle hook - dont necessarily needs implements onInit - but uses it for compile-time checking
   ngOnInit() {
     this.service.getAll()  //moved to services/post.service -- for encapsulation
    .subscribe(posts =>
      this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        post.id = response;
        //SPLICE VS PUSH - splice adds at specified point, push is at end
        //splice(beg, how many want to remove, what and where do u wnat to add post[0])
        this.posts.splice(0, 0, post);
        console.log(response);
      }, (error: AppError) => {
        if(error instanceof BadInput)
          // IF YOU HAD A FORM -- this.form.setErrors(error.originalError)
          alert('This post has already been deleted.')
        else throw error;
      })
  }

  updatePost(post: any) {
    //patch is to update only few properties in object
    // REMOVED -- this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });
    //PUT METHOD: send whole thing -- this.http.put(this.url, JSON.stringify(post)) 
  }

  deletePost(post: any) {
    this.service.delete(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.')
        else throw error;
      });
  }
}
