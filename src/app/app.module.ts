import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BigCarouselComponent } from './big-carousel/big-carousel.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCarouselComponent,
    MenuBarComponent,
    GridGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
