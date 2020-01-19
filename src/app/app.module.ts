import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-n-beverage/food-n-beverage.component';
import { RestaurentComponent } from './food-n-beverage/restaurent/restaurent.component';
import { BarsComponent } from './food-n-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WelnessNSpaComponent } from './lifestyle/welness-n-spa/welness-n-spa.component';
import { ResortNActivityComponent } from './lifestyle/resort-n-activity/resort-n-activity.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { IndianWeddingsComponent } from './weddings/indian-weddings/indian-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestaurentComponent,
    BarsComponent,
    LifestyleComponent,
    WelnessNSpaComponent,
    ResortNActivityComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    IndianWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
