import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Base } from './etc/base';
import { User } from './user/user';
import { Category } from './category/category';
import { Post } from './post/post';


@Injectable()
export class FireService extends Base {

  user: User;
  category: Category;
  post: Post;

  /** This runs only one time. contructor of Service will run only one time and re-used by container. */
  constructor(
    private ngZone: NgZone
  ) {
    super();
    this.user = new User();
    this.category = new Category();
    this.post = new Post();

    this.initUser();
  }

  initUser() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      this.ngZone.run( x => {} );     /// refresh the view if state changes.
      if (user) {
        console.log('user signed in');
      } else {
        // No user is signed in.
        console.log('user is not signed in');
      }
    });

  }



}
