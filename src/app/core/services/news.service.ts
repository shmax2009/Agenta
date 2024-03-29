import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../models/game';
import {GlobalConstants} from "../../global-constants";
import { New } from '../models/new';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsListUrl = GlobalConstants.serverUrl + 'news';

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<New[]> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.get<New[]>(this.newsListUrl, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });  }
}
