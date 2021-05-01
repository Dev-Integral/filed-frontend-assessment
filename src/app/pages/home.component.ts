import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserDataService } from '../service/user-data-service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    constructor(private userDataService: UserDataService) { }
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

    onSubmit() {
        this.userDataService.addData(this.model);
    }
}