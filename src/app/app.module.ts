import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SmallMenuBarComponent } from './small-menu-bar/small-menu-bar.component';
import { BigCarouselComponent } from './big-carousel/big-carousel.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BigCarouselComponent,
    MenuBarComponent,
    GridGalleryComponent,
    SmallMenuBarComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
