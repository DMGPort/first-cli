import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

import { Blog } from '../blog';
import { BLOGS } from '../blog-data'

@Component({
  selector: 'blog-gallery',
  templateUrl: './blog-gallery.component.html',
  styleUrls: ['./blog-gallery.component.css']
})
export class BlogGalleryComponent implements OnInit {

    blog: Blog;
    selectedBlog: Blog;
    blogs: Blog[] = [];

    constructor(
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit(): void {
        this.blogService.getBlogs()
            .then(k => this.blogs = k);
    }
    onSelect(blog: Blog): void {
        this.selectedBlog = blog;
        this.router.navigate(['/blog', this.selectedBlog.id]);
    }

   
}
