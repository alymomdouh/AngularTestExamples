import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from 'src/Components/default/default.component';
import { RegisterComponent } from 'src/Components/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    //CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent,
    DefaultComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
