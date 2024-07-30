import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SideBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
