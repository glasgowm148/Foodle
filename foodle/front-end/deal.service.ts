import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './src/app/user.service';


@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/deals');
  }


}
