import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
@Injectable({ providedIn: "root" })
export class PostServcie {
  constructor(private http: HttpClient) {}
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        "https://ng-default-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    console.log(postData, "Hello");
  }
  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-default-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((responseData) => {
          console.log(responseData);
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }
  deletePosts() {
    return this.http.delete(
      "https://ng-default-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
