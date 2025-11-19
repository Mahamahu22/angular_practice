import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
   AppComponent,
    //MultiplyPipe,
    //FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
