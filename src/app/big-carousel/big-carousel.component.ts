import { Component, OnInit } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css']
})
export class BigCarouselComponent {
	public images = IMAGES;
}

var IMAGES: Image[] = [
	{ "title": "Blah blah", "url": "https://systemicalternatives.files.wordpress.com/2015/01/nature-photos-2012-7.jpg?w=1200", "aux":"" },
	{ "title": "Mountains..", "url": "https://static.pexels.com/photos/4019/landscape-mountains-nature-rocks.jpeg", "aux":"" },
	{ "title": "Clouds n shit", "url": "https://support.nature.org/tnc_redesign/images/giantBG-beach-20.jpg", "aux":"" },
	{ "title": "More Clouds", "url": "https://static.pexels.com/photos/4817/snow-nature-forest-trees.jpeg", "aux":"" },
	{ "title": "Forest", "url": "http://www.oregonmetro.gov/sites/default/files/styles/slideshow_compact/public/Scouters%20Mountain%20Nature%20Park%208.22.14%205.JPG?itok=-spX3U_Z", "aux":"" }	
];