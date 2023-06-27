import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminaddComponent } from './adminadd/adminadd.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
   {path:'register-page',component:RegisterPageComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'hotel-page/:id',component:HotelPageComponent},
  {path:'booking',component:BookingpageComponent},
  {path:'orders',component:OrderdetailsComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'adminedit',component:AdmineditComponent},
  {path:'adminadd',component:AdminaddComponent}
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
