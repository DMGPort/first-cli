import { Component } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.css']
})
export class GridGalleryComponent {

	public blogs = BLOGS;
   
}

var BLOGS: Blog[] = [
    { id: 1, "title": "G-Warm(n)ing", "subTitle": "Drufus with a take on Climate Change", text: "", author: "", date: "", "imgUrl": "https://images.unsplash.com/photo-1465462435674-896294106ff8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=42d196a62e5615250ed2d452f43091c0" },
    { id: 2, "title": "Sports", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1430769860170-bea225f02277?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0098caae6ab199a2b9b39945094a82a0"},
    { id: 3, "title": "People", "subTitle": "When I met people and puked", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=8685659f70fee1f09d517d247f882133"},
    { id: 4, "title": "Nature", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1453582910667-13cbcd4479c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c8e9bc8a057b89a6b08f81448e2bf304"},
    { id: 5, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1470698416516-70c8af45a6b6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ea3069d25d30360653afee609dd5615c"},
    { id: 6, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1463590780123-b66a3da8a2b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=984e3da55532167a9bee71d1d4779527"},
    { id: 7, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1428509397302-6725315e7947?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a29ba872e2cc37fdb67694a05a8576b4"},
    { id: 8, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1470093879860-2221625b28be?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c5c73f51adc4f85505806fe5d645efc6"},
    { id: 9, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1479150631305-affc21872aed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=333ee9581e93ec6096251177bcc1ec06"},
    { id: 10, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1464747108843-cec40b4f0157?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e4a3f56909895233b0623af17a7126f8"},
    { id: 11, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1476383709704-4b5037070692?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=edcb824f546f2ec3d7e354c944e3ac6e"},
    { id: 12, "title": "Stuff", "subTitle": "Some short random text", text: "", author: "", date: "",  "imgUrl": "https://images.unsplash.com/photo-1477336074447-9d9d6d10c422?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fb4656fdaff604ec6e3f740fa578888c"}
];