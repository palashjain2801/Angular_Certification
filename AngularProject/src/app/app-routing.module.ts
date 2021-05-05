import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './MainScreen/home/home.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { UserSettingComponent } from './Setting/user-setting/user-setting.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/Login",pathMatch:'full'
  },
  {
    path:"Login",
    component: LoginComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Order",
    component:OrderDetailsComponent
  },
  {
    path:"Profile",
    component:ProfileComponent
  },
  {
    path:"Setting",
    component:UserSettingComponent
  },
  {
    path:"Register",
    component: RegisterComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,OrderDetailsComponent,ProfileComponent,UserSettingComponent, RegisterComponent]
