import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
//posts is a field
  posts : any[];
  
  
  constructor(private service : PostService) { 
    
  }

  createPost(input : HTMLInputElement){
    let post : any = {title: input.value}
    input.value = '';
    this.service.createPost(post)
    this.posts.splice(0,0,post);
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response =>{
      console.log(response);
    }, 
    error => {
      alert('Received unexpected error');
      console.log(error);
    })
  }

  deletePost(post){
    
   this.service.deletePost(post.id)
    .subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, 
    error => {
      alert('Received unexpected error');
      console.log(error);
    })
  }
  ngOnInit() {
   this.service.getPost()
    .subscribe(response => {
      this.posts =  response.json();
    }, 
    error => {
       alert('Received unexpected error');
       console.log(error);
    });  
  }

}
