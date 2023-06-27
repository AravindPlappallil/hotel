import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit{

  place:any
  fromdate:any
  todate:any
  hname:any
  hprice:any
  roomtype:any
  difference:any
  totalprice:any
  userName:any
  constructor (private ar:ActivatedRoute,private ds:DataService, private fb:FormBuilder,  private route:Router){}
  
  // booking model form
  bookingForm=this.fb.group({
    fullname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
    email:['',[Validators.required,Validators.pattern('[a-z@.a-z]+')]],
    psw:['',[Validators.required,Validators.pattern('[A-Za-z0-9]+')]],
    cardn:['',[Validators.required,Validators.pattern('[0-9]+')]],
    cardcvv:['',[Validators.required,Validators.pattern('[0-9]+')]],
    cmonth:['',[Validators.required,Validators.pattern('[0-9]+')]],
    cardyear:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  ngOnInit(): void {

    this.ar.params.subscribe(()=>{
      this.place=localStorage.getItem("place")
      this.fromdate=localStorage.getItem("fromdate")
      this.todate=localStorage.getItem("todate")
      console.log(this.place);
      console.log(this.fromdate);
      console.log(this.todate);
      this.hname=localStorage.getItem("hname")
      this.hprice=localStorage.getItem("hprice")
      this.roomtype=localStorage.getItem("roomtype")

     this.calculateDiff()

     this.totalprice=this.difference*this.hprice
      this.userName=localStorage.getItem("userName")
      
      
    })
  }

  booking(){
    if(this.bookingForm.valid){
      this.ds.bookedDetailApi(this.userName,localStorage.getItem("userNumber"),this.hname,this.totalprice,this.fromdate,this.todate).subscribe((result:any)=>{
        alert("Order Success")
        this.route.navigateByUrl(`home-page`)
      })
    }
    else{
      alert("invalid payment")
    }
  }

  calculateDiff() {
    
    let d2 = Date.parse(this.todate);
    let d1 = Date.parse(this.fromdate); //time in milliseconds
    var timeDiff = d2 - d1;
    var diff = timeDiff / (1000 * 3600 * 24);
    this.difference = Math.floor(diff) + 1;
    console.log(this.difference);
    localStorage.setItem("days",this.difference)


  }

 
}
