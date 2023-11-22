import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    BrowserAnimationsModule ,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
