import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {


  constructor ( private route:Router,   private formBuilder:FormBuilder,){

  }
  form = this.formBuilder.group({

    usuario:['',[Validators.email, Validators.required,Validators.email]],
    password:['',[ Validators.required,]],
  }
    
  );

  login()
  {

    if (this.form.invalid){
      alert("Datos de acceso incorrectos")
    }else{
      this.route.navigate(["/tasks"]);
    }


  }
  
}


