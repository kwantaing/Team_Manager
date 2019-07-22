import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { G1Component } from './g1/g1.component';
import { G2Component } from './g2/g2.component';
import { G3Component } from './g3/g3.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    StatusComponent,
    ManageComponent,
    G1Component,
    G2Component,
    G3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
