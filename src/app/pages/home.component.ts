import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { UserDataService } from '../service/user-data-service';
import { decrement, increment, reset } from '../store/action';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    count$: Observable<number>;
    constructor(
        private store: Store<{count: number}>,
        private userDataService: UserDataService
        ) {    
            this.count$ = store.select('count');
         }
    form = new FormGroup({});
    model = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'firstName',
            type: 'input',
            templateOptions: {
                label: 'First Name',
                placeholder: 'Enter First Name',
                required: true,
            }
        },
        {
            key: 'lastName',
            type: 'input',
            templateOptions: {
                label: 'Last Name',
                placeholder: 'Enter Last Name',
                required: true,
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                label: 'Email address',
                placeholder: 'Enter email',
                required: true,
            }
        },
        {
            key: 'monthly',
            type: 'input',
            templateOptions: {
                label: 'Monthly Budget.',
                placeholder: 'Monthly Advertising Budget',
                required: true
            }
        },
        {
            key: 'phone',
            type: 'input',
            templateOptions: {
                label: 'Phone number',
                placeholder: 'Enter phone number',
                required: true
            }
        }
    ];

    increment() {
        this.store.dispatch(increment());
        this.count$.subscribe(data => {console.log(data)});
      }
     
      decrement() {
        this.store.dispatch(decrement());
        console.log(this.count$.subscribe(data => {console.log(data)}));
      }
     
      reset() {
        this.store.dispatch(reset());
        console.log(this.count$.subscribe(data => {console.log(data)}));
      }

    onSubmit() {
        this.userDataService.addData(this.model);
    }
}