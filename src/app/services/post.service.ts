import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';



@Injectable()
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/photos";
  constructor(private http : Http) { }
    
    getPost()
      {
      return this.http.get(this.url)
      }
    
      createPost(post){    
        return this.http.post(this.url, JSON.stringify(post))
        .catch((error: Response)=> {
            if(error.status === 400)
            
             return Observable.throw(new AppError());
        });
      }

      updatePost(post){
        return this.http.put(this.url, JSON.stringify(post))
      }
      deletePost(id){
        return this.http.delete(this.url + '/' + id)
        .catch((error : Response) => {
          return Observable.throw(new AppError());

        })
      }

    }