import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  room:any
  hotel:any
  roomDetail:any
  hotelDetail:any
  hotelName1:any
  roometype:any
  hotelp:any
  uname:any

  constructor (private ar:ActivatedRoute, private ds:DataService){}
  ngOnInit(): void {

    this.ar.params.subscribe((result:any)=>{
      this.room=result.id
      this.hotel=result.id
      this.uname=localStorage.getItem("userName")
      // console.log(this.room);
      // console.log(this.hotel);
      
    })

    this.ds.viewRoomApi(this.hotel,this.room).subscribe((result:any)=>{
      this.roomDetail=result.message
      console.log(result.result);
      this.hotelDetail=result.result[0].hotelname
      this.hotelp=result.result[0].price
      this.roometype=result.message[0].roomtype
      

      // this.hotelName1=this.hotelDetail
      console.log(this.hotelDetail);
      console.log(this.hotelp);
      console.log(this.roomDetail);
      
      
      
       
    })
    

  }

  payment(){
    localStorage.setItem("hname",this.hotelDetail)
    localStorage.setItem("roomtype",this.roometype)
    localStorage.setItem("hprice",this.hotelp)

  }

}
