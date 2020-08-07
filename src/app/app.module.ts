import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';

import { DocumentsComponent } from './components/documents/documents.component';
import { WordsComponent } from './components/words/words.component';
import { AddtopicsComponent } from './components/addtopics/addtopics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelpgridComponent } from './components/helpgrid/helpgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    WordsComponent,
    AddtopicsComponent,
    NavbarComponent,
    HelpgridComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
