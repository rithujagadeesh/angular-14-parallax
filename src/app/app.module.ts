import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ParallaxDirective } from './parallax-effect/parallax-effect.directive';
import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParallaxDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
