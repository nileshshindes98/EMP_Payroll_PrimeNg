import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CardModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
     
    ],
    providers: [MessageService],
    exports: [RegisterComponent],
})
export class RegisterModule { }
