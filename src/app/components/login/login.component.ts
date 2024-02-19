// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage =undefined;

  constructor(private fb : FormBuilder, private router : Router, private authService : AuthService) {
  }
  ngOnInit() {
    this.formLogin=this.fb.group({
      email : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  handleLogin() {

    // if(this.formLogin.value.username=="admin" && this.formLogin.value.password=="1234"){
    //   this.router.navigateByUrl("/students");
    // }
    let email=this.formLogin.value.email;
    let password=this.formLogin.value.password;
    this.authService.login(email, password)
      .then(resp=>{
        this.router.navigateByUrl("/dashboard");
      })
      .catch(error=>{
        this.errorMessage=error;
      })
    }
  
  }
