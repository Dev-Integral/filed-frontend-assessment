import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { of } from 'rxjs/internal/observable/of';

@Injectable()

export class UserDataService {
    user$: Observable<object>
    
 constructor(){
    
 }
  addData(data: object) {
    console.table(data);
  }
  getData(): Observable<object> {
    return this.user$
  }   
}
