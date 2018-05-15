import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
