import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/service.service';
// import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=""
  // psw=""
  // amnt=""

  // acno1=""
  // psw1=""
  // amnt1=""
  user=""
  acno:any
  dateandtime:any
 

  constructor(private ds:DataService,private fb:FormBuilder,private router: Router){
    // acess user name
   this. user=this.ds.currentuser
   this.dateandtime=new Date()


   
  }
 depositform=this.fb.group({acno:[''],psw:[''],amnt:['']})
 withdrawform=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})


  ngOnInit(): void {
    // if(!localStorage.getItem('currentacno')){
    //   alert('Please Login')
    //   this.router.navigateByUrl('')

    // }

  }

  deposit(){
    var acno=this.depositform.value.acno
    var psw=this.depositform.value.psw
    var amnt=this.depositform.value.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} credicted to your account and balance is ${result}`)
    }
    else{
      alert("incorrect account number or password")
    }

  }
  withdraw(){

    var acno1=this.withdrawform.value.acno1
    var psw1=this.withdrawform.value.psw1
    var amnt1=this.withdrawform.value.amnt1

    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1} is debited and balance is${result}` )
    }


  }
  
  logout(){

    // localStorage.removeItem('acnumber')
    // localStorage.removeItem('database')

   

    this.router.navigateByUrl('')
  }
  // if(){

  // }
  deleteconfirm(){
    this.acno=JSON.parse(localStorage.getItem('acnumber') || " ")

  }
  

}