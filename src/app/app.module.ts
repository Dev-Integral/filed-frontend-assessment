import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { userDataReducer } from './store/userData.reducer';
import { UserDataService } from './service/user-data-service';
import { DetailPageComponent } from './pages/detail-page.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      user: userDataReducer,
    })
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
