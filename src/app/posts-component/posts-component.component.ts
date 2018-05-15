import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
//posts is a field
  posts : any[];
  private url = "http://jsonplaceholder.typicode.com/posts";
  
  constructor(private http : Http) { 
    this.http.get(this.url)
      .subscribe(response => {
        this.posts =  response.json();
      });  
  }

  createPost(input : HTMLInputElement){
    let post : any = {title: input.value}
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    this.posts.splice(0,0,post);
  }

  updatePost(post){
    this.http.patch(this.url, JSON.stringify({isRead : true}))
    this.http.put(this.url, JSON.stringify(post))
    .subscribe(response =>{
      console.log(response);
    })
  }

  deletePost(post){
    
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }
  ngOnInit() {
  }

}
