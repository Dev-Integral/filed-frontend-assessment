import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { POST_DATA } from '../store/Useraction';


@Injectable()

export class UserDataService {
    user$: Observable<object>
    
 constructor(
   private store: Store
   //private http: HttpClient
  ){}


  addData(data: object) {
    console.table(data);
    console.log(this.store);
  }
  postData(data: object) {
    this.store.dispatch({type: POST_DATA, payload: data});
  }
  getData() {
    return this.user$
  }   

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //   console.error(error);
  //   return of(result as T);
  //   };
  // }
}