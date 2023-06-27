import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  // uname:any
  // unum:any
  // upsw:any
  // ucpsw:any


  pswCheck: any = false
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {

  }
  // model form
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-zA-Z]+')]],
    unum: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }

  register() {
    // console.log(this.uname,this.unum,this.upsw,this.ucpsw);
    if (this.registerForm.valid) {
      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {
        this.ds.registerApi(this.registerForm.value.uname,
          this.registerForm.value.unum,
          this.registerForm.value.psw).subscribe((result: any) => {
            alert(result.message)
            this.router.navigateByUrl("")

          },
          result => {
            alert(result.error.message);
          })}
      else {
              this.pswCheck = true
            }
    }
      else {
        alert("invalid form")
      }

    }

  }
