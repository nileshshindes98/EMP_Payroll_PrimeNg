import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CardModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
     
    ],
    providers: [MessageService],
    exports: [LoginComponent],
})
export class LoginModule { }
