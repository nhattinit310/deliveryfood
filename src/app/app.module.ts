import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule }   from '@angular/forms';
import { Http,Headers,Response, HttpModule } from '@angular/http/';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { DataService } from './data.service';
import {
  HeaderComponent,FooterComponent,SharedModule
} from './shared';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    AuthModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
