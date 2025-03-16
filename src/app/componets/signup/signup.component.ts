import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { LoginSignupdatatype } from '../../Datatype/LoginSignupdatatype';
import { LoginSignup } from '../../Service/LoginSignup.service';
import { Allroles } from '../../ROLES/Allroles';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NavComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  alldetails!:FormGroup;
  formBuilder:FormBuilder=inject(FormBuilder);

  service:LoginSignup=inject(LoginSignup);

  router:Router=inject(Router);

constructor(){
  this.alldetails=this.formBuilder.group(
    {
      fullname:[""],
      email:[""],
      password:[""],
      confirmPassword:[""]
  
    }
  )

}


signup(){
  let loginSignupdatatype:LoginSignupdatatype={
  fullname:this.alldetails.value.fullname,
  email:this.alldetails.value.email,
  password:this.alldetails.value.password,
  allroles:Allroles.CUSTOMER
  
  
}

this.service.signup(loginSignupdatatype).subscribe({
  next:(Response)=>{
    console.log(Response);
    this.router.navigate(["/home"])
  }
})
}
}