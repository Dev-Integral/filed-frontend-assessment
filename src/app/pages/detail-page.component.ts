import { Component } from '@angular/core';

import { UserDataService } from '../service/user-data-service';

@Component({
    selector: 'detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})

export class DetailPageComponent {

    user$;
    constructor(private dataService: UserDataService) {
        
    }

}