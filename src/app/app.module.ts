import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SmallMenuBarComponent } from './menu-bar-small/small-menu-bar.component';
import { BigCarouselComponent } from './big-carousel/big-carousel.component';
import { BlogGalleryComponent } from './blog-gallery/blog-gallery.component';
import { BlogFullComponent } from './blog-full/blog-full.component';

import { AppRoutingModule } from './app-routing.module';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SmallMenuBarComponent,
    BigCarouselComponent,
    BlogGalleryComponent,
    BlogFullComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
