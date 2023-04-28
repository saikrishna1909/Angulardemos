import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { PostData} from './postdata.model';
import { BlogServicesService } from '../blog-services.service';
@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  constructor(private httpClient:HttpClient,private blogServices:BlogServicesService) { }

  ngOnInit(): void {
  }
  errorMessage:string=null
  onCreatePost(postData:PostData,form:NgForm){
   // console.log(typeof(postData))

    this.blogServices.onCreatePost(postData).subscribe((data)=>{
        console.log(data)
    })
    form.reset()
  }
  dbPosts:PostData[]=[]
  // onFetchPosts(){
  //   this.dbPosts.push(
  //     {
  //       title:'my post',
  //       content:'Today was a good day'
  //     }
  //   )
  // }
  fetchPosts(){
    this.blogServices.fetchPosts().subscribe((data)=>{
      this.dbPosts=data
    },(error)=>{
      this.errorMessage=error.error.error
    });
    console.log(this.dbPosts)
  }
  onDeletePosts(){

    this.httpClient
  .delete(
    'https://myapphttpproject-77d42-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
  )
  .subscribe((data)=>{
    console.log(data)
    this.fetchPosts()
  })
  }

}
