import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDataService } from '../service/user-data-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface AppState {

}

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    submitted
    user$: Observable<object>
    formData: FormGroup;
    constructor(
        private fb: FormBuilder,
        private store: Store<{ user: object }>,
        private userDataService: UserDataService,
        private toastr: ToastrService,
        private router: Router
    ) {

        this.user$ = this.store.select('user')

    }
    ngOnInit() {

        this.formData = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            monthly: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }
    get dataFormControl() {
        return this.formData.controls;
    }


    onSubmit() {
        if (this.formData) {
            this.userDataService.postData(this.formData.value);
            this.toastr.success('Form submitted successfully', 'Update!!!');
            console.log(this.formData);
        } else {
            this.toastr.error('Form is invalid', 'Invalid');
            console.log(this.formData);
        }
        null;
    }
    viewData(){
        if(this.user$){
            console.log(this.user$);
            this.router.navigate(['detail']);
        }
    }
}