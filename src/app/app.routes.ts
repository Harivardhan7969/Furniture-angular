import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:"", loadComponent:() => import("./componets/home/home.component").then(m => m.HomeComponent)},
    { path:"home", loadComponent:() => import("./componets/home/home.component").then(m => m.HomeComponent)},
    { path:"cart", loadComponent:() => import("./componets/shoppingcart/shoppingcart.component").then(m => m.ShoppingcartComponent)},
    { path:"payment", loadComponent:() => import("./componets/payment/payment.component").then(m => m.PaymentComponent)},
    { path:"success", loadComponent:() => import("./componets/orderconfirm/orderconfirm.component").then(m => m.OrderconfirmComponent)},
    { path:"contact", loadComponent:() => import("./componets/contactus/contactus.component").then(m => m.ContactusComponent)},
    { path:"about", loadComponent:() => import("./componets/About/about/about.component").then(m => m.AboutComponent)},
    { path:"login", loadComponent:() => import("./componets/login/login.component").then(m => m.LoginComponent)},
    {path:"prodcutdetail",loadComponent:()=>import("./componets/pdetails/pdetails.component").then(m=>m.PdetailsComponent)},
    {path:"register",loadComponent:()=>import("./componets/signup/signup.component").then(m=>m.SignupComponent)},
    {path:"product",loadComponent:()=>import("./componets/product/product.component").then(m=>m.ProductComponent)},
   

];
