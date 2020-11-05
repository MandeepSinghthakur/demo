import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class CommonService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
  private postsUrl ='https://jsonplaceholder.typicode.com/posts'
  private commentsUrl ='https://jsonplaceholder.typicode.com/comments'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

 /** GET users from the server */
  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<any>('getUsers', []))
      );
  }

  /** GET posts from the server */
  getPosts(userid): Observable<[]> {
    let httpParams = new HttpParams().set('userid', userid)
    return this.http.get<[]>(this.postsUrl,{
                params: httpParams
        })
      .pipe(
        tap(_ => console.log('fetched posts')),
        catchError(this.handleError<any>('getPosts', []))
      );
  }
  /** GET comments from the server */
  getComments(postId): Observable<[]> {
    let httpParams = new HttpParams().set('postId', postId)
    return this.http.get<[]>(this.commentsUrl,{
                params: httpParams
        })
      .pipe(
        tap(_ => console.log('fetched posts')),
        catchError(this.handleError<any>('getPosts', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}