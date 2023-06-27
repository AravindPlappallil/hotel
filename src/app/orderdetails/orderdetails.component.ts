import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit{
  orderDetails:any
  number:any
  name:any
  constructor (private ds:DataService){}
  
  ngOnInit(): void {

    this.number=localStorage.getItem("userNumber")
    console.log(this.number);
    
    this.ds.orderDetailApi(this.number).subscribe((result:any)=>{
      this.orderDetails=result.message
      
    })
  }

}
