import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  

constructor(private route:Router,private fb:FormBuilder, private ds:DataService){}

// model
loginForm=this.fb.group({
  unum:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

  ngOnInit(): void {

  }

  login(){
    // console.log(this.uname,this.psw);
    if(this.loginForm.valid){
      this.ds.loginApi(this.loginForm.value.unum,this.loginForm.value.unum,this.loginForm.value.psw)
      .subscribe((result:any) =>{

          if(result.role == "admin"){
            alert(result.message)
            this.route.navigateByUrl('adminpage')
          }
          else{
            alert(result.message)
            this.route.navigateByUrl('home-page')
            localStorage.setItem("userName",result.userName)
            localStorage.setItem("userNumber",result.userNumber)
          }
      },
        result=>{
          alert(result.error.message)
        }
      )
    }
    else{
      alert('invalid form')
    }
   
    
  }

}
