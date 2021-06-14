import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/validators/app-errors';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
        map((response: any) => response.json()),
        catchError(this.handleError)
    );
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.handleError)
    );
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true})).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if(error.status === 400)
      return throwError(new BadInput(error.json()));

    if(error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
