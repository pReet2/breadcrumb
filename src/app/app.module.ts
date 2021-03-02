import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { Material } from './app-material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Material,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [OneComponent, TwoComponent, ThreeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
