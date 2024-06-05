import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { CapicuaCheckerComponent } from '../capicua-checker/capicua-checker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CapicuaCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  
})
export class AppModule { }
