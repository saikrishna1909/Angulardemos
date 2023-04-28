import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../postdata.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @Input()
post:PostData
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
onDeletePost(){
  this.httpClient
  .delete(
    'https://myapphttpproject-77d42-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+this.post.id+
    ".json"
  )
  .subscribe((data)=>{
    console.log(data)
  })
}
}
