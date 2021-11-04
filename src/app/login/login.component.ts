import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/user-register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router, private commServ:UserRegisterService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
    this.commServ.getUsers().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    });
  }
  loginForm(data:any){
    console.log(data)
    if(data.name){
      this.users.forEach((item:any) => {
        if(item.name === data.name && item.email === data.email){
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
        }
        else{
          localStorage.clear();
        }
        
      });
    }
  }
  goToRegister(){
    this.router.navigate(['register'])
}
}
