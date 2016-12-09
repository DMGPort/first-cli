import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BigCarouselComponent } from './big-carousel/big-carousel.component';
import { BlogGalleryComponent } from './blog-gallery/blog-gallery.component';
import { BlogFullComponent } from './blog-full/blog-full.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BigCarouselComponent },
    { path: 'blog/home', component: BlogGalleryComponent },
    { path: 'blog/:id', component: BlogFullComponent }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
