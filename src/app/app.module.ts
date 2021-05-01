import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer'
import { UserDataService } from './service/user-data-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      user: userReducer
    })
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
