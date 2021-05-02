import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';


@Injectable()

export class UserDataService {
    user$: Observable<object>
    
 constructor(
   private store: Store
   //private http: HttpClient
  ){
    
 }
  addData(data: object) {
    console.table(data);
    console.log(this.store);
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