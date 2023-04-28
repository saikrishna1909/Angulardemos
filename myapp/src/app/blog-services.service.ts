import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from './myblog/postdata.model';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {

  myData:any
  constructor(private httpClient:HttpClient) { }
  onCreatePost(postData:PostData){
   return this.httpClient
    .post(
      'https://myapphttpproject-77d42-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData
    ) 
  }
  fetchPosts(){
    let arrayData=[]
    return this.httpClient
    .get(
      'https://myapphttpproject-77d42-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    )
    .pipe(
      map((data)=>{
        for(let key in data){
          arrayData.push({...data[key],id:key})
        }
        return arrayData
      }
      )
    )
  }
}
