import { Injectable, inject } from "@angular/core";
import { Appurl } from "../Constant/appurl";
import { LoginSignupdatatype } from "../Datatype/LoginSignupdatatype";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../Datatype/Customer";

@Injectable({
    providedIn:"root"
})

export class LoginSignup{
    http:HttpClient=inject(HttpClient);


    signup(loginSignupdatatype:LoginSignupdatatype){
        return this.http.post<Customer>(`http://localhost:8080/api/register`,loginSignupdatatype);
    }
}
