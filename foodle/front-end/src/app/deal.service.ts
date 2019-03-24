import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import { DealModel } from './deal-model';
import { Observable } from 'rxjs';
import { ModelMapper } from './functions/modelMapper';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DealService {

  url = 'api/deals';

  constructor(private http: HttpClient, private _userService: UserService) { }
  list(): Observable<DealModel[]> {
    return this.http.get<DealModel[]>(this.url).pipe(
      map(data => data.map((item: any) => {
        return new ModelMapper(DealModel).map(item);
      }
      ))
    );
  }


  /* Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/deals');
  }

 */


}
