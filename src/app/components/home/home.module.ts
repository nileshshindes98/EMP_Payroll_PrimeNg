import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        TableModule,
        InputTextModule,
        FormsModule,
        SidebarModule,
        ButtonModule,
        ToastModule,
        MegaMenuModule
    ],
    providers: [MessageService],
    exports: [HomeComponent],
})
export class HomeModule { }
