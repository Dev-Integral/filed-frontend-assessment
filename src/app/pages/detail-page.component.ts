import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserDataService } from '../service/user-data-service';

@Component({
    selector: 'detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})

export class DetailPageComponent {

    user$;
    constructor(private dataService: UserDataService, private store: Store<{ user: object }>, 
        private router: Router ) {
        this.user$ = this.store.select('user');
    }
    back(){
        if(this.user$){
            console.log(this.user$);
            this.router.navigate(['home']);
        }
    }
}