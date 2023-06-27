import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor (private router:Router){}
  
  
  ngOnInit(): void {

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
    this.router.navigateByUrl("")

  }
}
