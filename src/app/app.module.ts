import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { routing } from './app.routing';

import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { WeatherService } from './providers/weather.service';

import { MdButtonModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule, MdProgressSpinnerModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    SettingsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    routing,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdProgressSpinnerModule
  ],
  providers: [AuthService, AuthGuard, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
