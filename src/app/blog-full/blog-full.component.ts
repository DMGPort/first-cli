import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Blog } from '../blog';
import { BlogService } from '../blog.service'

@Component({
  selector: 'blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.css']
})
export class BlogFullComponent implements OnInit {
    @Input()
    blog: Blog;
    selectedBlog: Blog;
    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.blogService.getBlog(id)
                .then(k => this.blog = k);
        });
    
    }
    goBack(): void {
        this.location.back();
    }
    nextBlog(blog: Blog): void {
        this.selectedBlog = blog;
        if (blog) {
            this.router.navigate(['/blog', this.selectedBlog.id + 1]);
        } else {
            this.router.navigate(['/home']);
        }
    }
}
