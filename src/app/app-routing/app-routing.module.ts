import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BigCarouselComponent } from '../big-carousel/big-carousel.component';
import { GridGalleryComponent } from '../grid-gallery/grid-gallery.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BigCarouselComponent },
    { path: 'blog', component: GridGalleryComponent }
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
