import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './MainScreen/home/home.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { UserSettingComponent } from './Setting/user-setting/user-setting.component';

const routes: Routes = [
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
