import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  hoteldetail: any
  image: any
  hotelName: any
  fromdate: any
  todate: any
  place: any
  uname: any

  constructor(private dp: DatePipe, private ds: DataService, private fb: FormBuilder, private route: Router, private ar: ActivatedRoute) { }

  bookingData = this.fb.group({
    splace: ['', [Validators.required]],
    fdate: ['', [Validators.required]],
    tdate: ['', [Validators.required]]
  })

  ngOnInit(): void {

    this.ar.params.subscribe(() => {
      this.uname = localStorage.getItem("userName")
      console.log(this.uname);
    })

    




  }
  todaydate = this.dp.transform(new Date(), 'yyyy-MM-dd');

  // view room details
  book(roomid: any) {
    console.log(roomid);
    this.route.navigateByUrl(`hotel-page/${roomid}`)

  }

  booking() {
    if (this.bookingData.valid) {
      this.fromdate = this.bookingData.value.fdate
      this.todate = this.bookingData.value.tdate
      this.place = this.bookingData.value.splace

      this.ds.viewHotelApi().subscribe((result: any) => {
        this.hoteldetail = result.message
        console.log(this.hoteldetail);
  
      })
    }
    else {
      console.log("no data");

    }

    localStorage.setItem("place", this.place)
    localStorage.setItem("fromdate", this.fromdate)
    localStorage.setItem("todate", this.todate)




  }
  logout() {
    localStorage.removeItem("hname")
    localStorage.removeItem("todate")
    localStorage.removeItem("fromdate")
    localStorage.removeItem("hprice")
    localStorage.removeItem("roomtype")
    localStorage.removeItem("days")
    localStorage.removeItem("userNumber")
    localStorage.removeItem("userName")
    localStorage.removeItem("place")
    this.route.navigateByUrl("")

  }




}

