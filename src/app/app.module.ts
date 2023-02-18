import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from 'src/Components/default/default.component';
import { FileDownloadComponent } from 'src/Components/file-download/file-download.component';
import { HtmlTopdfComponent } from 'src/Components/html-topdf/html-topdf.component';
import { RegisterComponent } from 'src/Components/register/register.component';
import { ToDoAppsComponent } from 'src/Components/to-do-apps/to-do-apps.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DefaultComponent,
    ToDoAppsComponent,
    HtmlTopdfComponent,
    FileDownloadComponent
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
    DefaultComponent,
    ToDoAppsComponent,
    HtmlTopdfComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
