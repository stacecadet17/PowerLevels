import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { SupersaiyanfourComponent } from './supersaiyanfour/supersaiyanfour.component';
import { SupersaiyanthreeComponent } from './supersaiyanthree/supersaiyanthree.component';
import { SupersaiyantwoComponent } from './supersaiyantwo/supersaiyantwo.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyanfourComponent,
    SupersaiyanthreeComponent,
    SupersaiyantwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
