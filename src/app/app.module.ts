import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminaddComponent } from './adminadd/adminadd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotelPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BookingpageComponent,
    OrderdetailsComponent,
    AdminpageComponent,
    AdmineditComponent,
    AdminaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
