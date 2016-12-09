import { Injectable } from '@angular/core';

import { Blog } from './blog';
import { BLOGS } from './blog-data';

@Injectable()
export class BlogService {

    constructor(
        
    ) { };
    getBlogs(): Promise<Blog[]> {
        return Promise.resolve(BLOGS);
    }

    getBlog(id: number): Promise<Blog> {
        return this.getBlogs()
            .then(k => k.find(blog => blog.id === id));
    }



}
