import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {BotFormService} from './bot-form.service';
import {GlobalConstants} from "../../global-constants";

@Injectable({
  providedIn: 'root'
})
export class BotService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private botFormService: BotFormService) {
  }

  saveBotUrl = GlobalConstants.serverUrl + "bots/upsert"

  upsertBot(): Observable<number> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.put<number>(this.saveBotUrl, this.botFormService.getBotFromForm(), {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }
}
