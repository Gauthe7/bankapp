import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/service.service';
// import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim = "Your Perfect Banking Partner"
  data = "Enter an account number"
  acno = ""
  psw = ""
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0 },
    1001: { acno: 1001, username: "amal", password: 123, balance: 0 },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0 }




  }
  constructor(private router: Router,private ds:DataService,private fb:FormBuilder) { }
  loginform=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void {

  }
  //   login() {
  //     // alert("login clicked")
  //     var acno = this.acno
  //     var psw = this.psw
  //     var userDetails = this.userDetails


  //   if(acno in userDetails) {
  //     if(psw == userDetails[acno]["password"]){
  //       alert("login sucess")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("incorrect user name")
  //   }
  // }
  login() {



    // console.log(a.value);


    // alert("login clicked")
    var acno = this.loginform.value.acno
    var psw = this.loginform.value.psw
    
    if(this.loginform.valid){
      const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("incorrect user name or passsword")
    }
    }
    else{
      alert('invalid form')
    }



  }
  // acnoChange(event: any) {
  //   this.acno = event.target.value

  // }
  // pswdchange(event: any) {

  //   this.psw = event.target.value
  //   console.log(this.psw);


  // }

}