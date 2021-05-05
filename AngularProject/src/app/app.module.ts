import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { HeaderLoginComponent } from './auth/header-login/header-login.component';
import { HeaderMainComponent } from './MainScreen/header-main/header-main.component';
import { HomeComponent } from './MainScreen/home/home.component';
import { ListFoodComponent } from './MainScreen/list-food/list-food.component';
import { UserSettingComponent } from './Setting/user-setting/user-setting.component';
import { ListCardComponent } from './Setting/list-card/list-card.component';
import { ListAddressComponent } from './Setting/list-address/list-address.component';
import { AddAddressComponent } from './Setting/add-address/add-address.component';
import { EditAddressComponent } from './Setting/edit-address/edit-address.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { ListCartComponent } from './Cart/list-cart/list-cart.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { FoodService } from './service/food.service';
import { OrderService } from './service/order.service';
import { SettingService } from './service/setting.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent
    // LoginComponent,
    // RegisterComponent,
    // ForgetPasswordComponent,
    // HeaderLoginComponent,
    // HeaderMainComponent,
    // HomeComponent,
    // ListFoodComponent,
    // UserSettingComponent,
    // ListCardComponent,
    // ListAddressComponent,
    // AddAddressComponent,
    // EditAddressComponent,
    // ProfileComponent,
    // ListCartComponent,
    // OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,FoodService,OrderService,SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
