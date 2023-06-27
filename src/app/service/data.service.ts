import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // register api - request type-> post
  registerApi(uname: any, unum: any, psw: any) {
    const body = {
      uname,
      number: unum,
      psw,
      

    }
    return this.http.post('http://localhost:3001/register', body)
  }

  // login api - request-> post 
  loginApi(unum: any,adminid:any, psw: any) {
    const body = {
      adminid,
      number: unum,
      psw
    }
    return this.http.post('http://localhost:3001/login', body)
  }

  // view hotels - request type-> get
  viewHotelApi() {
    return this.http.get('http://localhost:3001/viewhotel')
  }
  // view room details
  viewRoomApi(hotelid:any,roomid:any){
    const body={
      hotelid,
      roomid
    }
    return this.http.post('http://localhost:3001/viewroom',body)
  }

  // booked Data - request type-> post
  bookedDetailApi(userName:any, number:any, hotelname:any, totalamount:any, checkindate:any, checkoutdate:any){
    const body={
      uname:userName, 
      number, 
      hotelname, 
      totalamount, 
      checkindate, 
      checkoutdate
    }
    return this.http.post('http://localhost:3001/booking', body)
  }

  // order details
  orderDetailApi(number:any){
    return this.http.get(`http://localhost:3001/orderdetails/${number}`)
  }
  
}
