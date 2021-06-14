import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

  // getPosts() {
  //   return this.http.get(this.url).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // postPosts(post: any) {
  //   return this.http.post(this.url, JSON.stringify(post)).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // patchPost(post: any) {
  //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true})).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // deletePost(id: any) {
  //   return this.http.delete(this.url + '/' + id).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: Response) {
  //   if(error.status === 400)
  //     return throwError(new BadInput(error.json()));

  //   if(error.status === 404)
  //     return throwError(new NotFoundError());

  //   return throwError(new AppError(error));
  // }
}
